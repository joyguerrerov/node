const express = require('express');
const motoRouter = express.Router();

const { getMoto, createMoto, updateMoto, deleteMoto } = require('../controllers/moto.controller');
//añadimos '/' y creamos el endpoint
motoRouter.get('/', getMoto); // para ver todas mis bicis
motoRouter.post('/', createMoto);// añadir una bici al catalogo
motoRouter.patch('/', updateMoto);// para modificar 
motoRouter.delete('/', deleteMoto);// para borrar un dato 

module.exports = {motoRouter} // esto es para exportar {...}