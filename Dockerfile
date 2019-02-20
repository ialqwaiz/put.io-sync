FROM hypriot/rpi-node

RUN git clone https://github.com/ialqwaiz/put.io-sync.git
RUN npm install put.io-sync

VOLUME /TV
VOLUME /Movies

CMD ["node","bin/putio-sync"]
