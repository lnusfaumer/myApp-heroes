let heroesList = require("../data/heroes.json")

const heroesController = {

      rutaInicial: function(req, res, next) {res.send(heroesList); 
          },
      idProfesion: function(req, res, next) { 
            if(heroesList[req.params.id-1] == undefined){
                  res.send( 'No tenemos en nuestra base ningún héroe ni heroína con ese id')
            }
            else( res.send('Hola, mi nombre es' +' '+ heroesList[req.params.id-1].nombre + ' ' + 'y soy' +' ' + heroesList[req.params.id-1].profesion))
      },

      idResenia: function(req, res, next) { res.send('Resenia del heroe:'+ req.params.tipo);
      },


}

module.exports = heroesController