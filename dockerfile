# Use a imagem oficial do Node.js
FROM node:18

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia apenas os arquivos necessários para instalar dependências
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install && npm install -g @angular/cli

# Copia o restante dos arquivos do projeto (exceto os ignorados pelo .dockerignore)
COPY . .

# Exponha a porta usada pelo Angular
EXPOSE 4200

# Comando padrão para iniciar o servidor Angular
CMD ["npm", "start"]
