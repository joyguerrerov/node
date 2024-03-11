const mongoose = require('mongoose');

const aulaSchema = new mongoose.Schema({// esto es un esquema de la libreria moonguse 
   
    planta: {
        type: Number,
        required: true,
        trim: true // te limpia de espacios que nos sobram
    },
    asignatura: {
        type: String,
        required: true,
        trim: true // te limpia de espacios que nos sobram
    },
   alumnos: [{
        type: mongoose.Schema.Types.ObjectId, // esto siempre igual solo cambia el ref
        ref: "Alumno"
    }],
});

const Aula = mongoose.model('Aula', aulaSchema); // aqui todas las mayusculas siempre iran asi, en todos los modelos
async function buscarAulas() {
    try {
        const resultados = await Aula.find({ planta: { $eq: 2} });
        console.log(resultados);
    } catch (error) {
        console.error(error);
    };
}
buscarAulas();

module.exports = Aula; //lo exportamos