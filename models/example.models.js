// Requerir el esquema y modelo de mongoose
const {Schema, model} = require('mongoose');
// Crear esquema de la coleccion
const exampleSchema = new Schema({
    // Campos de la coleccion
    text: {type: String, require: true},
    number: {type: Number, require: true},
    status: {type: Boolean, require: true}
}, {
    // Añadir fecha de creacion
    timestamps: true,
    // No añadir v_
    versionKey: false
})
// Exportar esquema | Nombre de la coleccion y su esquema
module.exports = model('texts', exampleSchema);