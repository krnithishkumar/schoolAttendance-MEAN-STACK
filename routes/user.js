var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');


var User = require('../models/user');

router.post('/', function(req, res, next) {
  
      var user = new User({
               'staffid':req.body.staffid,
               'password': bcrypt.hashSync(req.body.password,10),
               'name':req.body.name,
               'dateofbirth':req.body.dateofbirth,
               'gender':req.body.gender,
               'email':req.body.email,
               'phonenumber':req.body.phonenumber
           });

    user.save(function(err,result){
     if(err){
       return res.status(500).json({
         title :'An error occured',
         error:err
       });
      }
    res.status(201).json({
          msg:'User Created',
          obj:result
    });      
    
    });
});

module.exports = router;
