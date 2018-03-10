var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var schema = new Schema({
    studentid:{type:String},
    name : {type:String},
    fathersname:{type:String},
    mothersname:{type:String},
    dateofbirth:{type:Date},
    gender:{type:String},
    age:{type:Number},
    phonenumber:{type:String},
    classid:{type:String}
    });

module.exports = mongoose.model('student',schema);