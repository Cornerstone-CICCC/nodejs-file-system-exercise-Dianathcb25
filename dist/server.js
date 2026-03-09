"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Check the README.md file for instructions to the exercise
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const server = http_1.default.createServer((req, res) => {
    const { url } = req;
    if (url === '/view-image') {
        const imagePath = path_1.default.join(__dirname, 'images', 'veryhappydog.jpg');
        fs_1.default.readFile(imagePath, (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(404, { 'Content-type': 'text/plain' });
                res.end('Image not found.');
                return;
            }
            res.writeHead(200, { 'Content-type': 'image/jpeg' });
            res.end(data);
        });
    }
    else {
        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.end('Route not found.');
    }
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/view-image`);
});
