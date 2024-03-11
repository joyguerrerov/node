// 1. LLAMAR AL MODELO
const Tienda = require('../models/tienda.model');

// 2. CREAR LAS FUNCIONES CRUD (GET, POST, PATCH, DELETE)

// localhost:3000/colegio/65e0e8046d04e8604e3d8f36 ejemplo de peticion con su id, no hay interrogacion asi que esto es un parametro

const getTienda = async (req, res, next) => {
    // ¿Qué voy a consultar? -> id
    const _id = req.params._id; // obtengo la id
    // consulto en base de datos
    try {
        const tienda = await Tienda.findById(_id);
        // le devolvemos los datos al usuario
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: tienda
        });
    } catch (error) {
        next(error);
    }
}

const getTiendas = async (req, res, next) => {
    // ¿Qué voy a consultar? -> id
    const _id = req.params._id; // obtengo la id
    // consulto en base de datos
    try {
        const tiendas = await Tienda.find();
        // le devolvemos los datos al usuario
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: tiendas
        });
    } catch (error) {
        next(error);
    }
}

const createTienda = async (req, res, next) => { // esto dice que hemos creado la rute, que si nos da error  nos avise, y luego la exportamos
    try {
        console.log("text");
        const tienda = new Tienda(req.body); 
        await tienda.save();
        res.status(201).json({
            status: 201,
            message: 'created',
            data: tienda
            });
    }catch (error) {
        next(error);
    }
}


module.exports = { getTienda, getTiendas, createTienda }