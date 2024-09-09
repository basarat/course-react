const http = require('http');

http.createServer((req, res) => {
  /** CORS */
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	if ( req.method === 'OPTIONS' ) {
		res.writeHead(200);
		res.end();
		return;
  }
  
  /** Echo */
  req.pipe(res);
}).listen(8080, () => {
  console.log('Server is running on port 8080');
});