// Check the README.md file for instructions to the exercise
import http from 'http';
import fs from 'fs';
import path from 'path';

const server = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/view-image') {
    const imagePath = path.join(__dirname, 'images', 'veryhappydog.jpg');

    fs.readFile(imagePath, (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.end('Image not found.');
        return;
      }

      res.writeHead(200, { 'Content-type': 'image/jpeg' });
      res.end(data);
    });
  } else {
    res.writeHead(404, { 'Content-type': 'text/plain' });
    res.end('Route not found.');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/view-image`);
});
