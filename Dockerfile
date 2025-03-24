FROM node:22

WORKDIR /app

COPY package.json .

COPY .. /app

RUN npm install

