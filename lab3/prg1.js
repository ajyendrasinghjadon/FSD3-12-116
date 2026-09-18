import http from 'http';

const server = http.createServer();

server.on('request', (req, res) => {
    res.write("Hello from server 2.");
    res.end();

});

server.listen(4444, () => {
    console.log("Server is running on port 4444");
})