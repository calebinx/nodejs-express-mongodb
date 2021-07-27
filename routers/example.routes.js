// Requerir el enrutador de express
const {Router} = require('express');
// Ejecutar Router
const router = Router();
// Requerir las funciones CRUD del controlador
const ctrl = require('../controllers/example.controllers'); 
// Rutas CRUD y sus funciones importadas de la constante ctrl
router.get('/', ctrl.shows);
router.get('/:id', ctrl.show);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.delete);
// Exportar las rutas
module.exports = router;