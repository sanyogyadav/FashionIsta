FROM nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./dist/fashion-ista/ /usr/share/nginx/html