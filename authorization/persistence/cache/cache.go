package cache

import (
	"context"
	"sync"
	"time"

	"github.com/patrickmn/go-cache"
	"github.com/plgd-dev/cloud/authorization/persistence"
)

type Cache struct {
	db         persistence.Persistence
	validUntil time.Duration

	expiration *cache.Cache
	users      *sync.Map
	devices    *sync.Map
}

type userDevices struct {
	sync.Mutex
	devices *sync.Map
}

type transaction struct {
	ctx context.Context
	db  persistence.Persistence
	c   *Cache
	tx  persistence.PersistenceTx
}

func newTransaction(ctx context.Context, db persistence.Persistence, c *Cache) *transaction {
	return &transaction{
		ctx: ctx,
		db:  db,
		c:   c,
	}
}

func New(db persistence.Persistence, validUntil time.Duration) *Cache {
	expiration := cache.New(validUntil, time.Minute)
	users := new(sync.Map)
	devices := new(sync.Map)
	expiration.OnEvicted(func(key string, _ interface{}) {
		users.Delete(key)
		devices.Delete(key)
	})
	return &Cache{
		db:         db,
		validUntil: validUntil,
		expiration: expiration,
		users:      new(sync.Map),
		devices:    new(sync.Map),
	}
}

func (c *Cache) NewTransaction(ctx context.Context) persistence.PersistenceTx {
	return newTransaction(ctx, c.db, c)
}

func (c *Cache) Clear(ctx context.Context) error {
	c.users = new(sync.Map)
	c.devices = new(sync.Map)
	c.expiration.Flush()
	return c.db.Clear(ctx)
}

func (c *Cache) Close(ctx context.Context) error {
	c.users = new(sync.Map)
	c.devices = new(sync.Map)
	c.expiration.Flush()
	return c.db.Close(ctx)
}

func (t *transaction) getTransaction() persistence.PersistenceTx {
	if t.tx == nil {
		t.tx = t.db.NewTransaction(t.ctx)
	}
	return t.tx
}

func (t *transaction) loadUserDevices(userID string) (*sync.Map, error) {
	val, _ := t.c.users.LoadOrStore(userID, new(userDevices))
	u := val.(*userDevices)
	u.Lock()
	defer u.Unlock()
	if u.devices == nil {
		tx := t.getTransaction()
		devices := new(sync.Map)
		iter := tx.RetrieveAll(userID)
		for {
			var v persistence.AuthorizedDevice
			ok := iter.Next(&v)
			if !ok {
				break
			}
			devices.Store(v.DeviceID, v)
		}
		if iter.Err() != nil {
			return nil, iter.Err()
		}
		u.devices = devices
	}
	t.c.expiration.SetDefault(userID, true)

	return u.devices, nil
}

func (t *transaction) Retrieve(deviceID, userID string) (_ *persistence.AuthorizedDevice, ok bool, err error) {
	val, err := t.loadUserDevices(userID)
	if err != nil {
		return nil, false, err
	}
	device, ok := val.Load(deviceID)
	if ok {
		return device.(*persistence.AuthorizedDevice), true, nil
	}
	return nil, false, nil
}

func (t *transaction) RetrieveByDevice(deviceID string) (_ *persistence.AuthorizedDevice, ok bool, err error) {
	val, ok := t.c.devices.Load(deviceID)
	if ok {
		t.c.expiration.SetDefault(deviceID, true)
		return val.(*persistence.AuthorizedDevice), true, nil
	}
	return t.getTransaction().RetrieveByDevice(deviceID)
}

type iterator struct {
	idx int
	res []*persistence.AuthorizedDevice
	err error
}

func (i *iterator) Err() error {
	return i.err
}

func (i *iterator) Next(v *persistence.AuthorizedDevice) bool {
	if i.idx >= len(i.res) {
		return false
	}
	*v = *i.res[i.idx]
	i.idx++
	return true
}

func (i *iterator) Close() {}

func (c *transaction) RetrieveAll(userID string) persistence.Iterator {
	val, err := c.loadUserDevices(userID)
	if err != nil {
		return &iterator{
			err: err,
		}
	}
	v := iterator{
		res: make([]*persistence.AuthorizedDevice, 0, 12),
	}
	val.Range(func(key interface{}, value interface{}) bool {
		v.res = append(v.res, value.(*persistence.AuthorizedDevice))
		return true
	})
	return &v
}

func (t *transaction) Persist(d *persistence.AuthorizedDevice) error {
	err := t.getTransaction().Persist(d)
	if err != nil {
		return err
	}
	val, err := t.loadUserDevices(d.UserID)
	if err != nil {
		return err
	}

	val.Store(d.DeviceID, d)
	t.c.devices.Store(d.DeviceID, d)
	t.c.expiration.SetDefault(d.DeviceID, true)
	return nil
}

func (t *transaction) Delete(deviceID, userID string) error {
	val, err := t.loadUserDevices(userID)
	if err != nil {
		return err
	}
	val.Delete(deviceID)
	t.c.devices.Delete(deviceID)
	t.c.expiration.Delete(deviceID)
	return t.getTransaction().Delete(deviceID, userID)
}

func (t *transaction) Close() {
	if t.tx != nil {
		t.tx.Close()
	}
}
