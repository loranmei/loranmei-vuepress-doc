FROM nginx:1.14.1-alpine
COPY docs /usr/local/nginx/doc
WORKDIR /usr/local/nginx/doc
