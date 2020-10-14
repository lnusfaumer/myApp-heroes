var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Heroes' });
});

/* GET heroes page. */
router.get('/heroes', function(req, res, next) {
  res.render('heroes', { title: 'Heroes',  });
});

module.exports = router;
