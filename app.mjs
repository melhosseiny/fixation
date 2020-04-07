import express from 'express';
import http from 'http';
import path from 'path';
import url from 'url';
import SocketIO from 'socket.io';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 80;

let app = express();
let server = http.Server(app);
let io = SocketIO(server);

app.use(express.static('public'))

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(PORT);
