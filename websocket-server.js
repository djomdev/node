const WebSocketServer = require('ws').Server;
const WSS = new WebSocketServer({port: 3232});

/**
 * Create a server
 * Every time a client is connected to this server, we are going to get the client (ws)
 * here you are listening for connection -
 */
WSS.on('connection', (ws)=>{
    console.log('We are connected');
});

/**
 * need to make the individual client ./websocket-client.js
 * need to write the connection
 */