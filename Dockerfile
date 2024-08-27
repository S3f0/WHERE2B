# 1. Verwende ein Node.js-Image als Basis
FROM node:16 AS build

# 2. Arbeitsverzeichnis im Container erstellen und setzen
WORKDIR /app

# 3. Kopiere die package.json und package-lock.json in das Arbeitsverzeichnis
COPY package*.json ./

# 4. Installiere die Abhängigkeiten
RUN npm install

# 5. Kopiere den gesamten Quellcode in das Arbeitsverzeichnis
COPY . .

# 6. Erzeuge eine Produktions-Build der React-App
RUN npm run build

# 7. Verwende ein Nginx-Image, um die Build-Outputs zu hosten
FROM nginx:alpine

# 8. Kopiere die Build-Outputs in das Verzeichnis, in dem Nginx sie servieren wird
COPY --from=build /app/build /usr/share/nginx/html

# 9. Exponiere den Port, auf dem Nginx lauscht
EXPOSE 80

# 10. Starte Nginx
CMD ["nginx", "-g", "daemon off;"]
