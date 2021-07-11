const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create client Schema & model
const ClientSchema = new Schema({
    name: {
        type: String,
        required:[true,'Name Is Required']
    },
    email:{
        type: String,
    },
    password:{
        type: String
    }

});

const Clients = mongoose.model('clients',ClientSchema);
module.exports = Clients;