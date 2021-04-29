FROM node:16
WORKDIR /home/node/app
COPY ./frontend/gigmusic/package.json /home/node/app
RUN npm install
RUN npm fund
RUN yarn install
