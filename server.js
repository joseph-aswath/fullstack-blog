const express = require('express');
const app = express();

//console.log(app); -> displays properties of app on console 

//middlewares 
//routes 
//error handling middleware 
//listen server 
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`server running on port : ${PORT}`))