const express= require('express');
const app= express();
const path =require('path');
const hbs= require('hbs');

require("./db/conn");
const Register = require('./models/registers');


const static_path=path.join(__dirname,'../public');
const template_path=path.join(__dirname,'../templates/views');
const partials_path=path.join(__dirname,'../templates/partials');


app.use(express.static(static_path))
app.set("view engine",'hbs')
app.set('views',template_path)
app.use(express.json());
app.use(express.urlencoded({extended:false}))
hbs.registerPartials(partials_path)


app.get('/',(req,res) =>{
	res.render('index');
})


app.get('/register',(req,res) =>{
	res.render('register');
})


app.get('/login',(req,res) =>{
	res.render('login');
})


app.post('/register',async (req,res) =>{
	try{
		const password=req.body.password;
		const confirmpassword=req.body.confirmpassword;

		if(password === confirmpassword){

			const registerEmployee = new Register({
				firstname: req.body.firstname,
				lastname : req.body.lastname,
				email : req.body.email,
				gender:req.body.gender,
				phone:req.body.phone,
				password:password,
				confirmpassword:confirmpassword

			})

			const registered= await registerEmployee.save();
			res.send(registered);

		}
		else{

			res.send("password is not matching");
		}




	}catch(e){
		console.log(e);
	}
	 
})



app.listen(4000,() =>{
	console.log('its working');
})