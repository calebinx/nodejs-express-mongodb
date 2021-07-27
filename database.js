// Requerir el modulo mongoose
const mongoose = require('mongoose');
// Conectar base de datos y asignarle un nombre
mongoose.connect('mongodb://localhost/examples',
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}
)
// Si conecta
.then((db) => console.log('Base de datos en funcionamiento'))
// No conecta
.catch((error) => console.error(error));
