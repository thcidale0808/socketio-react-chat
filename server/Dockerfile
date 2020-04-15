FROM node:10.13.0-alpine

WORKDIR /usr/app

COPY . /usr/app

RUN npm install --quiet
RUN npm install nodemon -g
RUN cp config-sample.json config.json
RUN npx tsc

CMD nodemon dist/index.js \
 & npx tsc --watch
