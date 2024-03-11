const express = require('express'); 
const vestidoRouter = express.Router();// alamacena la ruta

const { getVestido, getVestidos, createVestido } = require('../controllers/vestido.controller'); // llamamos al controlador

// 2- CONFIGURACION - LOGICA- PROCESOS

vestidoRouter.get('/:_id', getVestido)// aqui decimos que lo busque por su id, si nos dan mas informacion pondremos: './_id/.../..'
vestidoRouter.post('/', createVestido);
vestidoRouter.get('/', getVestidos)

// 3- EXPORTS
module.exports ={vestidoRouter}
