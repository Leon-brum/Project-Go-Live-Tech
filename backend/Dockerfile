FROM node:16-alpine

WORKDIR /backend

COPY package* .

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run", "dev" ]
CMD [ "dev" ]