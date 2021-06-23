const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/formdata",{ useUnifiedTopology: true,useNewUrlParser: true })
.then(() =>{
	console.log('working fine');
})
.catch((e) =>{
	console.log(e);
})

