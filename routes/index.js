var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Express' });
});

router.get('/store', function(req, res, next) {
  res.render('store');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/works', function(req, res, next) {
  res.render('works');
});

module.exports = router;
