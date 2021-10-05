# Imagem que deseja rodar (run): node.
FROM node

# Diretório que as informações estarão contidas.
WORKDIR /usr/app

# O arquivo "package.json" será copiado para o diretório "app", que fora declarado anteriormente.
COPY package.json ./

# Após copiar o "package.json", executar o comando "npm install".
RUN npm install

# Após realizar as etapas anteriores, copiar tudo (COPY . .) para a pasta raíz.
COPY . .

# Expor a porta que está sendo usada no projeto.
EXPOSE 3333

# Comando para executar o script criado.
CMD ["npm", "run", "dev"]