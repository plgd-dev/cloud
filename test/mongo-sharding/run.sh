#!/bin/bash                                                                                                                                                                                                    
                                                                                                                                                                                                               
echo "Starting cluster..."                                                                                                                                                                                     
                                                                                                                                                                                                               
## This starts up a multiversion cluster with 2 shards                                                                                                                                                         
## NOTE this will remove the existing ./data directory                                                                                                                                                         
rm -rf ./data/db/c1                                                                                                                                                                                            
                                                                                                                                                                                                               
mkdir ./data                                                                                                                                                                                                   
mkdir ./data/db                                                                                                                                                                                                
mkdir ./data/db/c1                                                                                                                                                                                             
mkdir ./data/db/c1/mongod1 
mkdir ./data/db/c1/mongod12                                                                                                                                                                                    
mkdir ./data/db/c1/mongod2                                                                                                                                                                                     
mkdir ./data/db/c1/config                                                                                                                                                                                      
                                                                                                                                                                                                               
mongod --port 29001 --setParameter enableTestCommands=1 --shardsvr --replSet "c1a" --dbpath ./data/db/c1/mongod1 --logpath ./data/db/c1/1.log --logappend &                                                  
mongod --port 29010 --setParameter enableTestCommands=1 --shardsvr --replSet "c1a" --dbpath ./data/db/c1/mongod12 --logpath ./data/db/c1/12.log --logappend &                                                
                                                                                                                                                                                                               
mongod --port 29002 --setParameter enableTestCommands=1 --shardsvr --replSet "c1b" --dbpath ./data/db/c1/mongod2 --logpath ./data/db/c1/2.log --logappend &                                                  
                                                                                                                                                                                                               
mongod --port 29003 --setParameter enableTestCommands=1 --configsvr --replSet "configRS" --dbpath ./data/db/c1/config --logpath ./data/db/c1/c.log --logappend &                                             
sleep 10                                                                                                                                                                                                       
                                                                                                                                                                                                               
## Initialize replica sets (just one member in each)                                                                                                                                                           
mongo --port 29001 --eval "rs.initiate({ '_id':'c1a', members:[{ '_id':0, 'host':'localhost:29001'}, { '_id':1, 'host':'localhost:29010'}]});" > /dev/null                                                   
mongo --port 29002 --eval "rs.initiate({ '_id':'c1b', members:[{ '_id':0, 'host':'localhost:29002'}]});" > /dev/null                                                                                         
mongo --port 29003 --eval "rs.initiate({ '_id':'configRS', members:[{ '_id':0, 'host':'localhost:29003'}]});" > /dev/null                                                                                    
echo "Waiting for c1 replica sets to initalize (29001, 29002)..."                                                                                                                                              
sleep 10                                                                                                                                                                                                       
                                                                                                                                                                                                               
## Start mongos                                                                                                                                                                                                
echo "Starting mongos at 29000 and 29004..."                                                                                                                                                                   
mongos --port 29000 --setParameter enableTestCommands=1 --configdb "configRS/localhost:29003" --logpath ./data/db/c1/s1.log --logappend &                                                                    
mongos --port 29004 --configdb "configRS/localhost:29003" --logpath ./data/db/c1/s2.log --logappend &                                                                                                        
sleep 10                                                                                                                                                                                                       
                                                                                                                                                                                                               
## Add shards, and shard one collection                                                                                                                                                                        
echo "Adding shards..."                                                                                                                                                                                        
mongo --port 29000 --eval "db.adminCommand({addShard: \"c1a/localhost:29001\"});db.adminCommand({addShard: \"c1b/localhost:29002\"});"                                                                       
echo "Sharding db 'test' and collection 'sharded' on key 'a'..."                                                                                                                                               
mongo --port 29000 --eval "sh.enableSharding('test');sh.shardCollection('test.sharded', { a:1 }, false);"

while sleep 10; do
    echo "running"
done