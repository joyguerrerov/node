// 1. LLAMAR AL MODELO
const Alumno = require('../models/alumno.model');

// 2. CREAR LAS FUNCIONES CRUD (GET, POST, PATCH, DELETE)

// localhost:3000/Alumno/65e0e8046d04e8604e3d8f36 ejemplo de peticion con su id, no hay interrogacion asi que esto es un parametro

const getAlumno = async (req, res, next) => {
    // ¿Qué voy a consultar? -> id
    const _id = req.params._id; // obtengo la id
    // consulto en base de datos
    try {
        const alumno = await Alumno.findById(_id);
        // le devolvemos los datos al usuario
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: alumno
        });
    } catch (error) {
        next(error);
    }
}

const createAlumno = async (req, res, next) => { // esto dice que hemos creado la rute, que si nos da error  nos avise, y luego la exportamos
    try {
        console.log("text");
        const alumno = new Alumno(req.body); 
        await alumno.save();
        res.status(201).json({
            status: 201,
            message: 'created',
            data: alumno
            });
    }catch (error) {
        next(error);
    }
}

const getAlumnos = async function buscarAlumnos() {
    try {
        const resultados = await Alumno.find({ age: { $gte: 17 } });
        console.log(resultados);
    } catch (error) {
        console.error(error);
    };
}
buscarAlumnos();


module.exports = { getAlumno, createAlumno }