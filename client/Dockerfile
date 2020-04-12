FROM node:10.13.0-alpine

WORKDIR /usr/app

COPY package.json .

COPY package-lock.json .

RUN npm install --quiet

ADD . /usr/app

CMD [ "npm", "start" ]
