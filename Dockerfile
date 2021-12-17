FROM node:16-alpine

RUN apk update && apk add ca-certificates && update-ca-certificates

RUN mkdir /websocket
ADD . /websocket
WORKDIR /websocket

# RUN npm install
CMD npm run serve