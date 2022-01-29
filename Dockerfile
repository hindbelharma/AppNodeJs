 # stage compilation
 FROM alpine:3.15 as builder
 
 RUN apk update && apk add nodejs npm 

 # chemin de travail
 WORKDIR /src

 COPY . .
 # installation des dépendances avec npm
 RUN npm install

 # build avec npm
 RUN npm run build

 # stage exécution
 FROM alpine:3.15 as runner

 COPY --from=builder . .
 COPY . .
 # exécution
 CMD ["node","/src/dist/infoSystem.js"]