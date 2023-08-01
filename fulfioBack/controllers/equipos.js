const { response, request } = require('express');
const Equipo = require('../models/Equipos');




const incidenciasGet = async(req = request, res = response) => {
    let incidencias = await Equipo.find();

    const {estado, mensaje} = req.query;

    if (estado){
        incidencias =  incidencias.filter(element => {
                console.log(element.estado);
            return  element?.estado.toLowerCase()== estado.toLowerCase()
          });
    }

  if (mensaje){
    incidencias =  incidencias.filter(element => {

      let indice = element?.mensaje?.toLowerCase().includes(mensaje.toLowerCase());
      if (indice > 0)
         return true;
      else
         return false;
    });
  }

    res.json({
        incidencias
    });
}

const incidenciaPost = async(req, res = response) => {

    const {  mensaje, tipo_incidencia, estado } = req.body;


    const query = { estado: { $ne: false }  };
    const num_incidencia = await Equipo.countDocuments(query) + 1;

    const equipo = new Equipo({ mensaje,num_incidencia, tipo_incidencia, estado });



    // Guardar en BD
    await equipo.save();

    res.json({
        equipo
    });
}



const incidenciaPut = async(req, res = response) => {

    const { id } = req.params;
    const {  ...resto } = req.body;
    const incidencia = await Equipo.findByIdAndUpdate( id, resto, {new:true} );
    res.json({incidencia});
}

const incidenciaDelete = async(req, res = response) => {

    const { id } = req.params;

    const incidencia = await Equipo.findByIdAndDelete( id );


    res.json(incidencia);
}


module.exports = {

    incidenciaPut,

    incidenciaDelete,
    incidenciasGet,
    incidenciaPost
}
