"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const HOST = 'localhost';
const PORT = 3001;
const server = http_1.default.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    switch (req.url) {
        case '/':
            res.writeHead(200);
            res.end(JSON.stringify({ data: 'success' }));
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: 'Resource not found' }));
    }
});
server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
