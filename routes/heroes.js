var express = require('express');
var router = express.Router();

let heroesController = require('../controllers/heroesController.js')


/* GET heroes page. */
router.get('/', heroesController.rutaInicio );

router.get('/:id/profesion', heroesController.idProfesion )

router.get('/:id/resenia/:tipo', heroesController.idResenia )

router.get('/creditos', heroesController.creditos )






module.exports = router;