const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({// esto es un esquema de la libreria moonguse, que te conecta con mongoDB
  
    nombre: {
        type: String,
        required: true,
        trim: true // te limpia de espacios que nos sobram
    },
    nif: {
        type: String,
        required: true,
        unique: true // para algo unico que no puede tener nadie mas
    },
    age: {
        type: Number,
        required: true,
    },
    siblings: [{ type: String }]// esto es un emeplo de un array, se pueden poner mas datos
});

const Alumno = mongoose.model('Alumno', alumnoSchema); // aqui todas las mayusculas siempre iran asi, en todos los modelos
async function buscarAlumnos() {
    try {
        const resultados = await Alumno.find({ age: { $gte: 17 } });
        console.log(resultados);
    } catch (error) {
        console.error(error);
    };
}
buscarAlumnos();
module.exports = Alumno; //lo exportamos