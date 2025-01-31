FROM node:23-alpine3.20

WORKDIR /app

COPY package*.json ./

RUN npm install && npm install -g @angular/cli

COPY . .

EXPOSE 4200

CMD ["npm", "start"]
