//ESTO ES OTRA FORMA-------

//1- IMPORTS ---llamaremos a express-- DE ESTA MANERA LA BUSCAMOOS POR ID

const express = require('express'); 
const alumnoRouter = express.Router();// alamacena la ruta

const { getAlumno, createAlumno } = require('../controllers/alumno.controller'); // llamamos al controlador

// 2- CONFIGURACION - LOGICA- PROCESOS

alumnoRouter.get('/:_id', getAlumno)// aqui decimos que lo busque por su id, si nos dan mas informacion pondremos: './_id/.../..'
alumnoRouter.post('/', createAlumno);
// 3- EXPORTS
module.exports ={alumnoRouter}

