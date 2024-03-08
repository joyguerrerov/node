const express = require('express');
const patinRouter = express.Router();

const { getPatin, createPatin, updatePatin, deletePatin } = require('../controllers/patin.controller');
//añadimos '/' y creamos el endpoint
patinRouter.get('/', getPatin); // para ver todas mis bicis
patinRouter.post('/', createPatin);// añadir una bici al catalogo
patinRouter.patch('/', updatePatin);// para modificar 
patinRouter.delete('/', deletePatin);// para borrar un dato 

module.exports = {patinRouter} // esto es para exportar {...}