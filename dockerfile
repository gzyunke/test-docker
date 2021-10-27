FROM node:11
MAINTAINER easydoc.net
ADD . /app
WORKDIR /app
RUN npm install --registry=https://registry.npm.taobao.org

CMD node app.js