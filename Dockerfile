# image de départ
FROM alpine:3.15 as builder
RUN apk update && apk add nodejs npm
 # chemin de travail
WORKDIR /src

 # downgrade des privilèges
# USER node

 # 
 # copie des fichiers du dépôt
COPY package*.json ./

COPY . .

 # installation des dépendances avec npm
RUN npm install

 # build avec npm
RUN npm run build

 # exécution
CMD ["node", "./dist/infoSystem.js"]



FROM alpine:3.15 as runner
RUN apk --no-cache add ca-certificates
WORKDIR /src
COPY --from=builder --chown=node:node . ./
CMD ["node", "./dist/infoSystem.js"]