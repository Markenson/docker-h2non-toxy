FROM ubuntu:18.04

RUN apt-get update && \
        apt-get install nodejs npm -y

RUN npm install toxy

EXPOSE 3000 9000

CMD ["/usr/bin/node", "toxy.js"]