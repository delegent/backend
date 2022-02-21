const express = require('express');

const app = express();

// middleware function for post 
app.use(express.json());

app.listen(3000);




let user = {};

app.get('/user',function(req,res){
	res.send(user);
})


app.post('/user',function(req,res){
	console.log(req.body);
	user = req.body.name
	res.json({
		"message":"data recieved successfully",
		"data":user
	})
})


app.patch('/user',function(req,res){
	console.log(
		req.body
	);
	res.json(
		{
			"message":"data recieved successfully"
		}
	)
})











