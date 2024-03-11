//ESTO ES OTRA FORMA-------

//1- IMPORTS ---llamaremos a express-- DE ESTA MANERA LA BUSCAMOOS POR ID

const express = require('express'); 
const tiendaRouter = express.Router();// alamacena la ruta

const { getTienda,  getTiendas, createTienda } = require('../controllers/tienda.controller'); // llamamos al controlador

// 2- CONFIGURACION - LOGICA- PROCESOS

tiendaRouter.get('/:_id', getTienda)// aqui decimos que lo busque por su id, si nos dan mas informacion pondremos: './_id/.../..'
tiendaRouter.post('/', createTienda);
tiendaRouter.get('/', getTiendas)
// 3- EXPORTS
module.exports ={tiendaRouter}