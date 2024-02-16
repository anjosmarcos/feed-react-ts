# Usa uma imagem base do Node.js
FROM node:latest

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json .

# Limpa o cache do npm
RUN npm cache clean --force

# Instala as dependências do projeto
RUN npm install

# Copia todos os arquivos do diretório atual para o diretório de trabalho dentro do contêiner
COPY . .

# # Expor a porta 5174
EXPOSE 5173

# Comando para iniciar a aplicação quando o contêiner for executado
CMD ["npm", "run", "dev"]
