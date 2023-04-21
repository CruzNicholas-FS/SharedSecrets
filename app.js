const http = require("http");
const host=process.env.HOST;
const port=process.env.PORT;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

const server = http.createServer(requestListener);
server.listen(port, host,()=>{console.log("running")})