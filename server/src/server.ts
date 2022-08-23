import http from 'http'

const HOST = 'localhost'
const PORT = 3001

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-Type', 'application/json')
    switch (req.url) {
        case '/':
            res.writeHead(200)
            res.end(JSON.stringify({ data: 'success' }))
            break
        default:
            res.writeHead(404)
            res.end(JSON.stringify({ error: 'Resource not found' }))
    }
})

server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`)
})