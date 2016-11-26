var webSocket = require('ws');

var WebSocketServer = webSocket.Server;
var wss = new WebSocketServer({port: 8124});
wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('received: %s', message);
        ws.send(message);
    });
});