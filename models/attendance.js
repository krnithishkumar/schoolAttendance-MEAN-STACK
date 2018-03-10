var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({
    Date:Date,
    classid:Number,
    staffid:String,
    absid:[Number],
    session:String
    });

module.exports = mongoose.model('attendance',schema);