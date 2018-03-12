var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({
    classid:String,
    students:[Number],
    standard:Number,
    section:String
    });

module.exports = mongoose.model('class',schema);