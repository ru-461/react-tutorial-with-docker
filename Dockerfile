FROM node:14-alpine

WORKDIR /app/

COPY package.json yarn.lock /app/

RUN yarn

COPY . /app/

EXPOSE 3000

ENV NODE_ENV=development

CMD [ "yarn", "start" ]