const http = require('http')


const server = http.createServer((req, res) => {
    if (req.url == '/home') {
        res.statusCode = 200
        res.write("welcome to page home")
    } else if (req.url == '/about') {
        res.statusCode = 200
        res.write("welcome to page about")
    } else if (req.url == '/contact') {
        res.statusCode = 200
        res.write("welcome to page contact")
    } else {
        res.statusCode = 404
        res.write("page not found")
    }
    res.end()
})

server.listen(5000, () => console.log('server running'))