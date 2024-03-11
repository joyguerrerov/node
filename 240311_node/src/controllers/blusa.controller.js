// 1. LLAMAR AL MODELO
const Blusa = require('../models/blusa.model');

// 2. CREAR LAS FUNCIONES CRUD (GET, POST, PATCH, DELETE)

// localhost:3000/ablusa/65e0e8046d04e8604e3d8f36 ejemplo de peticion con su id, no hay interrogacion asi que esto es un parametro

const getBlusa = async (req, res, next) => {
    // ¿Qué voy a consultar? -> id
    const _id = req.params._id; // obtengo la id
    // consulto en base de datos
    try {
        const blusa = await Blusa.findById(_id);
        // le devolvemos los datos al usuario
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: blusa
        });
    } catch (error) {
        next(error);
    }
}

//_______________________________________________________
// esto lo que me dice, es que quiero buscar todo(blusas)
const getBlusas = async (req, res, next) => { 
    // ¿Qué voy a consultar? -> id
    const _id = req.params._id; // obtengo la id
    // consulto en base de datos
    try {
        const blusas= await Blusa.find();
        // le devolvemos los datos al usuario
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: blusas
        });
    } catch (error) {
        next(error);
    }
}
//------------------

const createBlusa = async (req, res, next) => { // esto dice que hemos creado la rute, que si nos da error  nos avise, y luego la exportamos
    try {
        console.log("text");
        const blusa = new Blusa(req.body); 
        await blusa.save();
        res.status(201).json({
            status: 201,
            message: 'created',
            data: blusa
            });
    }catch (error) {
        next(error);
    }
}


module.exports = { getBlusa, getBlusas, createBlusa}