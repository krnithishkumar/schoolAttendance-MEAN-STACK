var express = require('express');
var router = express.Router();


var Class = require('../models/class');

router.post('/', function(req, res, next) {
  
      var user = new Class({
          'classid':req.body.classid,
          'students':[],
          'standard':req.body.standard,
          'section':req.body.section
    });

    user.save(function(err,result){
     if(err){
       return res.status(500).json({
         title :'An error occured',
         error:err
       });
      }
    res.status(201).json({
          msg:'class Created',
          obj:result
    });      
    
    });
});

module.exports = router;
