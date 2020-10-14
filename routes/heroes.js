var express = require('express');
var router = express.Router();

let heroesList = require("../data/heroes.json")

/* GET heroes page. */
router.get('/', function(req, res, next) {
  res.send(heroesList); 
});

module.exports = router;