// Crear un objeto para guardar las funciones
const ctrl = {}
// Requerir el esquema del modelo para interactuar con la base de datos
const models = require('../models/example.models');
// Funcion: Mostrar todos los registros
ctrl.shows = async (req, res) => { 
    const x = await models.find();
    res.json(x);
}
// Funcion: Mostrar uno solo registro
ctrl.show = async (req, res) => {
    // Buscar el registro con el id
    const x = await models.findById(req.params.id);
    res.json(x);
}
// Funcion: Crear un registro
ctrl.create = async (req, res) => {
    // Obtener el registro
    const x = new models(req.body);
    // Guardar el registro
    await x.save();
    res.json({message: 'creado'});
}
// Funcion: Actualizar un registro
ctrl.update = async (req, res) => {
    // Buscar el registro con el id y sus datos, despues actualizarlo
    await models.findByIdAndUpdate(req.params.id, req.body);
    res.json({message: 'actualizado'});
}
// Funcion: Eliminar un registro
ctrl.delete = async (req, res) => {
    // Buscar el registro con el id y eliminarlo
    await models.findByIdAndDelete(req.params.id);
    res.json({message: 'eliminado'});
}
// Exportar las funciones guardadas en la constante ctrl
module.exports = ctrl;