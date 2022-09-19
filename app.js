const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Quoc Thong dep trai nhat Can Tho  <img src="thong.jpeg"></h1>');
});

server.listen(port, () => {
    console.log(`Server running at port ` + port);
});
