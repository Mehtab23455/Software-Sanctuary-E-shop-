const express = require('express');


const router = express.Router();

router.get('/products', function(req, res){
  res.redirect('/products');
});

router.get('/401', function(Req, res){
  res.status(401).res.render('shared/401');
});
router.get('/403', function(Req, res){
  res.status(403).res.render('shared/403');
});

module.exports =  router;