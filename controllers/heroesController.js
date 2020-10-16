let heroesList = require("../data/heroes")

const heroesController = {

      rutaInicio: function(req, res, next) {
            res.send(heroesList); 
          },

      idProfesion: function(req, res, next) { 
            if(heroesList[req.params.id-1] == undefined){
                  res.send( 'No tenemos en nuestra base ningún héroe ni heroína con ese id')
            }
            else( res.send('Hola, mi nombre es' +' '+ heroesList[req.params.id-1].nombre + ' ' 
            + 'y soy' +' ' + heroesList[req.params.id-1].profesion))
      },

      idResenia: function(req, res, next) { 
            if(heroesList[req.params.id-1] == undefined){
                  return res.send( 'No tenemos en nuestra base ningún héroe ni heroína con ese id')
            }
            else( res.send( heroesList[req.params.id-1].resenia)
            )},

      creditos: function(req, res, next) {
            res.render('heroes', {title: 'Heroes', creditos: 'Aqui va un texto con los creditos'}); 
          },
      
      

}

module.exports = heroesController