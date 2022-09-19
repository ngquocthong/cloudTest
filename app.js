const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Quoc Thong dep trai nhat Can Tho
          </h1>
            <img src="./thong.jpeg" alt="Nature" width="400" height="700">');
});

server.listen(port, () => {
    console.log(`Server running at port ` + port);
});
