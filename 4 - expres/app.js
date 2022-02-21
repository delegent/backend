const express = require('express');

const app = express();

app.get('/',function(req,res){
	// res.send('<h1>Hello Brother</h1>');
	res.sendFile('./views/index.html',{root:__dirname});
})


app.get('/about',function(req,res){
	res.send("About");
	res.sendFile('D:\webd\backend\4 - expres\views\about.html',{root:__dirname});
})

// redirect
app.get('/about-us',function(req,res){
	res.redirect('/about');
})
// 404
app.use(function(req,res){
	res.sendFile('./views/404.html',{root:__dirname});
	res.status(404);
})
//// UPDATED HTTP METHODS // 



app.listen(3000,()=>console.log("Server Statretd"));