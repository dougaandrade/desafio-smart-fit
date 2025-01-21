FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install && npm install -g @angular/cli

COPY . .

EXPOSE 4200

CMD ["npm", "start"]
