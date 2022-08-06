FROM node AS build
ADD package.json package-lock.json /app/

WORKDIR /app

RUN npm install
ADD . /app/

RUN npm run build

FROM nginx
COPY --from=build app/dist /usr/share/nginx/html
EXPOSE 80
