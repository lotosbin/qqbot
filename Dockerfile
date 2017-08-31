#https://hub.docker.com/_/node/
FROM node
WORKDIR /app
COPY . /app
RUN yarn
ENTRYPOINT node main.js
EXPOSE 3100 3200
