// server creation
// http module requirement
const http = require('http');
const server = http.createServer(function(req,res){
	console.log('Request has been made');
	console.log(req);
	console.log(req.method);
	console.log(req.url);
})

// portnumber, host, callback func.
server.listen(3000,'localhost',function(){
	console.log(`Server is listening on port 3000`);
})