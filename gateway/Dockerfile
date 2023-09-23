# Hay una imagen de docker creada desde los repositorios de docker
FROM node:18-alpine3.17
# Lugar donde se guarda la aplicacion por convecion /app
WORKDIR /app
# Copia el archivo package.json y package-lock.json en la carpeta /app
COPY package*.json ./
# Instala todo lo que esta en el package.json
RUN  npm install
#  Fuente-Destino copia todo los archivos de codigo en nuesta carpeta /app
COPY . .
# Exponer un puerto
EXPOSE 8000
#  Comando para ejecutar la aplicacion 
CMD ["npm", "start"]
