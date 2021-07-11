const express = require('express');
const router = express.Router();
const Clients = require('../models/clients');

//get a person from the database
router.get('/clients',function (req,res,next) {
    res.send({type: 'GET'});
    // res.send("HEllo little client !!!")
});

//add a new person to the database
router.post('/clients',function (req,res,next) {
   // console.log(req.body);
   //  var clients = new Clients(req.body);
   //  clients.save();

    Clients.create(req.body).then(function (clients) {
        res.send(clients);
    }).catch(err=>{
        console.log(err.message())
    });
});

//update a person from the database
router.put('/clients/:id',function (req,res,next) {
    Clients.findByIdAndUpdate({_id: req.params.id},req.body).then(function () {
        Clients.findOne({_id: req.params.id}).then(function (clients) {
            res.send(clients);
        })
    });
});

//delete a person from the database
router.delete('/clients/:id',function (req,res,next) {
    //console.log(req.params.id);

    //mongoose method
    Clients.findByIdAndRemove({_id: req.params.id}).then(function (clients) {
        res.send(clients);
    });
   // res.send({type: 'DELETE'});
});

module.exports = router;