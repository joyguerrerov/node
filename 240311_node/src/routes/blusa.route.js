
const express = require('express'); 
const blusaRouter = express.Router();// alamacena la ruta

const { getBlusa, getBlusas, createBlusa } = require('../controllers/blusa.controller'); // llamamos al controlador

// 2- CONFIGURACION - LOGICA- PROCESOS

blusaRouter.get('/:_id', getBlusa)// aqui decimos que lo busque por su id, si nos dan mas informacion pondremos: './_id/.../..'
blusaRouter.post('/', createBlusa);
blusaRouter.get('/', getBlusas)

// 3- EXPORTS
module.exports ={blusaRouter}
