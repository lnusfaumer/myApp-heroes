var express = require('express');
var router = express.Router();

let heroesList = require("../data/heroes.json")

/* GET heroes page. */
router.get('/', function(req, res, next) {
  res.render("heroes", {title: "Heroes", h :heroesList}); 
});

module.exports = router;