const { response } = require('express');

const EquiposPing = require('../models/equipos_ping');



const obtenerResponseIncidencia = async(req, res = response ) => {

    let respose_incidencias =  await EquiposPing.find()
    .populate('incidencia')
    .populate('usuario');

     

    const { id } = req.params;
    const { estado} = req.query;

   // console.log('estado='+estado);
   // console.log('idhhh'+id);

    if (estado){
      respose_incidencias =  respose_incidencias.filter(element => {
            return  element.incidencia?.estado.toLowerCase()== estado.toLowerCase()
          })

    }

    console.log(respose_incidencias);

    if (id){
      respose_incidencias =  respose_incidencias.filter(element => {
      //  console.log(element.incidencia?._id);
        return  element.incidencia?._id == id
      })
    }

   


    res.json({
      respose_incidencias
    });
}



const crearResIncidencia = async(req, res = response ) => {

    const {  ...body } = req.body;


    // Generar la data a guardar
    const data = {
        ...body
    }

    const rsi = new EquiposPing( data );

    // Guardar DB
    await rsi.save();

    res.status(201).json(rsi);

}





module.exports = {
    crearResIncidencia,
    obtenerResponseIncidencia,

}
