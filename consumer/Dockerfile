FROM node:10.13.0-alpine

WORKDIR /usr/app

COPY package.json .

COPY package-lock.json .

RUN npm install --quiet

COPY . /usr/app

RUN npm run build

CMD [ "npm","run","start" ]
