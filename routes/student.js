var express = require('express');
var router = express.Router();


var Student = require('../models/student');

router.post('/', function(req, res, next) {
  
      var user = new Student({
               'studentid':req.body.studentid,
               'name':req.body.name,
               'fathersname':req.body.fathersname,
               'mothersname':req.body.mothersname,
               'dateofbirth':req.body.dateofbirth,
               'gender':req.body.gender,
               'age':req.body.age,
               'phonenumber':req.body.phonenumber,
               'classid':req.body.classid
           });

    user.save(function(err,result){
     if(err){
       return res.status(500).json({
         title :'An error occured',
         error:err
       });
      }
    res.status(201).json({
          msg:'student Created',
          obj:result
    });      
    
    });
});

module.exports = router;
