// 1. LLAMAR AL MODELO
const Vestido = require('../models/vestido.model');

// 2. CREAR LAS FUNCIONES CRUD (GET, POST, PATCH, DELETE)

// localhost:3000/abvestido/65e0e8046d04e8604e3d8f36 ejemplo de peticion con su id, no hay interrogacion asi que esto es un parametro

const getVestido = async (req, res, next) => {
    // ¿Qué voy a consultar? -> id
    const _id = req.params._id; // obtengo la id
    // consulto en base de datos
    try {
        const vestido= await Vestido.findById(_id);
        // le devolvemos los datos al usuario
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: vestido
        });
    } catch (error) {
        next(error);
    }
}

const getVestidos = async (req, res, next) => {
    // ¿Qué voy a consultar? -> id
    const _id = req.params._id; // obtengo la id
    // consulto en base de datos
    try {
        const vestidos= await Vestido.find();
        // le devolvemos los datos al usuario
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: vestidos
        });
    } catch (error) {
        next(error);
    }
}

const createVestido = async (req, res, next) => { // esto dice que hemos creado la rute, que si nos da error  nos avise, y luego la exportamos
    try {
        console.log("text");
        const vestido = new Vestido(req.body); 
        await vestido.save();
        res.status(201).json({
            status: 201,
            message: 'created',
            data: vestido
            });
    }catch (error) {
        next(error);
    }
}


module.exports = { getVestido, getVestidos, createVestido }