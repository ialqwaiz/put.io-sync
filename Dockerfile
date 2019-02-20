FROM hypriot/rpi-node 
 
RUN git clone github.com/ialqwaiz/put.io-sync.git .      
RUN npm install . 
 
VOLUME /TV 
VOLUME /Movies 
 
CMD ["node","bin/putio-sync"]
