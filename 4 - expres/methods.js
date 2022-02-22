const express = require('express');

const app = express();

// middleware function for post 
app.use(express.json());

app.listen(3000);




let users = [
	{
		'id':1,
		'name':'Anubhav'
	},
	{
		'id':2,
		'name':'Samar'
	},
	{

		'id':3,
		"name":"Vaibhav"

	}
];

app.get('/user',function(req,res){
	console.log(req.query)
	res.send(users);v
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


// update data in users object\
let updatedData = req.body;
for(val in updatedData){
users[val] = updatedData[val];
}
		


	res.json(
		{
			"message":"data recieved successfully"
		}
	)
})



/// params
app.get('/user/:userName',function(req,res){
	console.log(req.params.userName);
	
	// console.log(req.params.id);
	res.json({"data recieved":req.params.userName});

})










