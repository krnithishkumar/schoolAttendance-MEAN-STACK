var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({
    staffid: {type: String},
    password: {type: String},
    name : {type:String},
    dateofbirth:{type:Date},
    gender:{type:String},
    email:{type:String},
    phonenumber:{type:String}
    });

module.exports = mongoose.model('user',schema);