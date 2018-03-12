var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jswt = require('jsonwebtoken');

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


router.post('/signin',function(req,res,next){
User.findOne({staffid:req.body.staffid},function(err,user){
if(err){
  return res.status(500).json({
      title:'An error occured',
      error:err
  });
}
if(!user){
  return res.status(500).json({
      title:'Login Failed',
      error:{ messages:'Invalid user'}
  });
}

if(!bcrypt.compareSync(req.body.password,user.password)){
  return res.status(401).json({
    title:'Login Failed',
    error:{ messages:'Invalid password' }
});
}

var token = jswt.sign({user:user},'secret',{expiresIn:7200});
res.status(200).json({
    messages:'successfully logged in',
    token:token,
    userID:user.staffid
});
});
});

module.exports = router;
