FROM node:16
WORKDIR /home/node/app
COPY ./frontend/gigmusic/package.json /home/node/app
COPY ./frontend/gigmusic/yarn.lock /home/node/app
RUN yarn install
RUN npm install -g serve
RUN npm fund