const express = require('express');

const app = express();

// middleware function for post 
app.use(express.json());

const authRouter  = express.Router();
app.use('/auth',authRouter);

authRouter.
route('/signup')
.get(getSignUp)
.post(postSignUp)

function getSignUp(req,res){
	res.sendFile('/public/index.html',{root:__dirname});
}

function postSignUp(req,res){
	let data = req.body;
	res.json({
		message:"signed up",
		data:data
	});
}


app.listen(3000);




// let users = [
// 	{
// 		'id':1,
// 		'name':'Anubhav'
// 	},
// 	{
// 		'id':2,
// 		'name':'Samar'
// 	},
// 	{

// 		'id':3,
// 		"name":"Vaibhav"

// 	}
// ];
//  // mounting 
// const userRouter = express.Router();
// app.use('/user',userRouter);
// userRouter.route(/)
// .get(getUser)
// .post(postUser)
// .patch(updateUser)
// .delete(deleteUser)

// app.get('/user',function(req,res){
// 	console.log(req.query)
// 	res.send(users);
// })


// app.post('/user',function(req,res){
// 	console.log(req.body);
// 	user = req.body.name
// 	res.json({
// 		"message":"data recieved successfully",
// 		"data":user
// 	})
// })


// app.patch('/user',function(req,res){
// 	console.log(
// 		req.body
// 	);


// // update data in users object\
// let updatedData = req.body;
// for(val in updatedData){
// users[val] = updatedData[val];
// }
		


// 	res.json(
// 		{
// 			"message":"data recieved successfully"
// 		}
// 	)
// })



// /// params
// app.get('/user/:userName',function(req,res){
// 	console.log(req.params.userName);
	
// 	// console.log(req.params.id);
// 	res.json({"data recieved":req.params.userName});

// })


// function getUser(){

// }

// function postUser(){

// }

// function updateUser(){

// }

// function deleteUser(){

// }








