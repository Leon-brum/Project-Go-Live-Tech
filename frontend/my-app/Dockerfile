FROM node:18-alpine

WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install react react-dom @types/react @types/react-dom

EXPOSE 3001

CMD [ "npm", "run", "dev" ]
