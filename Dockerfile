FROM golang:1.16.6-alpine AS cloud-build
RUN apk add --no-cache curl git build-base
WORKDIR $GOPATH/src/github.com/plgd-dev/cloud
COPY go.mod go.sum ./
RUN go mod download
COPY . .