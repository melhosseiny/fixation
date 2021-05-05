import express from 'express';
import http from 'http';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 5000;

let app = express();
let server = http.Server(app);

app.use(express.static('dist'));
app.use(express.static('worker'));
app.use(express.static('media'));

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(PORT);
