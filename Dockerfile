# Usar una imagen oficial de Node.js como base
FROM node:23-alpine3.20

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY package*.json ./

# Instalar las dependencias de la API
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Exponer el puerto que la API escuchará
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]