//ESTO ES OTRA FORMA-------

//1- IMPORTS ---llamaremos a express-- DE ESTA MANERA LA BUSCAMOOS POR ID

const express = require('express'); 
const aulaRouter = express.Router();// alamacena la ruta

const { getAula, createAula } = require('../controllers/aula.controler'); // llamamos al controlador

// 2- CONFIGURACION - LOGICA- PROCESOS

aulaRouter.get('/:_id', getAula)// aqui decimos que lo busque por su id, si nos dan mas informacion pondremos: './_id/.../..'
aulaRouter.post('/', createAula);
// 3- EXPORTS
module.exports ={aulaRouter}