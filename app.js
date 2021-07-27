// Requerir la base de datos
require('./database.js');
// Requerir el modulo express
const express = require('express');
// Requerir el modulo morgan
const morgan = require('morgan');
// Crear un servidor con el objeto express
const app = express();
// Crear puerto
const port = 1000;
// Middleware
// Mostrar las peticiones o solicitudes del cliente
app.use(morgan('dev'));
// Aceptar formato json
app.use(express.json());
// Aceptar los datos que vienen de un formulario html
app.use(express.urlencoded({extended: false}));
// Rutas
app.use('/example', require('./routers/example.routes'));
// Iniciar el servidor en el puerto 'port'
app.listen(port, () => {
    console.log(`Servidor en el Puerto ${port}`);
})