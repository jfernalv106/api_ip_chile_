FROM node:18.20.7-alpine3.21

RUN apk update && apk add --no-cache git

WORKDIR /dist

RUN git clone https://github.com/jfernalv106/api_ip_chile_.git
WORKDIR /dist/api_ip_chile_

RUN chmod 777 -R /dist/

RUN npm i 
RUN npm i -g typescript
RUN tsc 


COPY .env .


CMD ["node", "/dist/api_ip_chile_/dist/app.js"]
EXPOSE 80


