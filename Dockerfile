FROM node:10-alpine

WORKDIR /code

COPY package.json /code
COPY yarn.lock /code

RUN yarn --frozen-lockfile 

COPY . /code

EXPOSE 7310

CMD yarn dbMigrate:prod && yarn start
