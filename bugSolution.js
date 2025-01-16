const http = require('http');
const fs = require('fs'); // Example module that can throw errors

const requestListener = async function (req, res) {
  try {
    // Simulate potential error
    const data = await fs.promises.readFile('./nonexistentfile.txt');
    res.writeHead(200);
    res.end('Hello, World! ' + data);
  } catch (err) {
    console.error('Error handling request:', err);
    res.writeHead(500);
    res.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server started on port 8080');
});
