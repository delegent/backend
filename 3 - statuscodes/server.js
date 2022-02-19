// server creation
// http module requirement
const http = require('http');
const fs = require('fs');
const server = http.createServer(function(req,res){
	console.log('Request has been made');
	// console.log(req);
	// console.log(req.method);
	// console.log(req.url);

	// res.setHeader('Content-Type','text/plain');
	res.setHeader('Content-Type','text/html');
	// res.write("Hello Coders :)");
	// res.write('<h1>Hello Bro</h1>');
	// res.end();

	let path = './views';
	switch(req.url){
		case '/':
			path+='/index.html'
			res.statusCode = 200;
			break
		case '/about':
			path += '/about.html'
			res.statusCode = 200;
			break
		default:
			path += '/404.html'
			res.statusCode = 404;
			break
	};



	fs.readFile(path,function(err,fileData){
		if(err){

		}else{

			/*
				agar ek hi cheex ha jo write krni hai 
				to hum log res.end ka use kr skte hai
				kyuki ek hi hum logo ko render krna hai
				aur agar aisa ho ki jyada hai aur tab bhi reder 
				krna hai tab hum log res.write ka use krenge


			*/
			// res.write(fileData)
			res.end(fileData);
		}
	})

})

// portnumber, host, callback func.
server.listen(3000,'localhost',function(){
	console.log(`Server is listening on port 3000`);
})





