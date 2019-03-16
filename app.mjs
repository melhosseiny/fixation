import express from 'express';
import http from 'http';
import path from 'path';
import url from 'url';
import SocketIO from 'socket.io'
import edge from 'edge-js';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 80;

let app = express();
let server = http.Server(app);
let io = SocketIO(server);

app.use(express.static('public'))

let EyeXFramework = edge.func('eyex.cs');

let payload = {
  x: 'random',
  onGazePoint: function(data, callback) {
    io.emit('news', data)
    callback(null, console.log(data))
  }
}

EyeXFramework(payload, function (error, result) {
    if (error) throw error;
    console.log(result);
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(PORT);
