var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Idan' });
});

/* GET test page. */
router.get('/test', function(req, res, next) {
  res.render('index', { title: 'test' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});


module.exports = router;
