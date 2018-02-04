FROM node:carbon-alpine as builder
WORKDIR /usr/local/app
COPY . .
RUN apk -U add bash make && \
    npm install && \
    make && \
    rm -rf src test

FROM node:carbon-alpine
WORKDIR /usr/local/app
COPY --from=builder /usr/local/app .
ENTRYPOINT ["node", "index.js"]
