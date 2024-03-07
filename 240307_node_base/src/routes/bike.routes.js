//ARCHIVO PARA DEFINIR ENDPOINT
const express = require('express');
const bikeRouter = express.Router();

const { getBike, createBike, updateBike, deleteBike } = require('../controllers/bike.controller');
//añadimos '/' y creamos el endpoint
bikeRouter.get('/', getBike); // para ver todas mis bicis
bikeRouter.post('/', createBike);// añadir una bici al catalogo
bikeRouter.patch('/', updateBike);// para modificar 
bikeRouter.delete('/', deleteBike);// para borrar un dato 

module.exports ={bikeRouter} // esto es para exportar {...}