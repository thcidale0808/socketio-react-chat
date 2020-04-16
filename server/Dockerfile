FROM node:10

WORKDIR /app
COPY package.json .
RUN npm install
RUN npm install nodemon -g

COPY . .
COPY ./config-sample.json ./config.json
RUN npx tsc

CMD ["nodemon"]
