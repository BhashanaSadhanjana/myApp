const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const routes = require('./routes/api')

//setting up express app
const app=express();

//connect to mongodb
mongoose.connect('mongodb+srv://root:1234@myapp.yemsj.mongodb.net/bhashana?retryWrites=true&w=majority',
    { useUnifiedTopology: true,useNewUrlParser: true });

// mongoose.connect('mongodb+srv://root:1234@myapp.yemsj.mongodb.net/bhashana',
//     { useUnifiedTopology: true,useNewUrlParser: true });
 mongoose.Promise = global.Promise;

//middle ware 01
app.use(bodyParser.json());

// initialize routes
// middle ware 02
app.use('/api',require('./routes/api'));

//error handling middleware
app.use(function (err,req,res,next) {
    //console.log(err);
    res.status(422).send({error:err.message});
});


//listen for requests
app.listen(process.env.port || 4000,function () {
    console.log('now listening for requests');
});



