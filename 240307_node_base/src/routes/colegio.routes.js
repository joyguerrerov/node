//ESTO ES OTRA FORMA-------

//1- IMPORTS ---llamaremos a express-- DE ESTA MANERA LA BUSCAMOOS POR ID

const express = require('express'); 
const colegioRouter = express.Router();// alamacena la ruta

const { getColegio, createColegio } = require('../controllers/colegio.controler'); // llamamos al controlador

// 2- CONFIGURACION - LOGICA- PROCESOS

colegioRouter.get('/:_id', getColegio)// aqui decimos que lo busque por su id, si nos dan mas informacion pondremos: './_id/.../..'
colegioRouter.post('/', createColegio);
// 3- EXPORTS
module.exports ={colegioRouter}