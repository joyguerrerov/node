const mongoose = require('mongoose');

const aulaSchema = new mongoose.Schema({// esto es un esquema de la libreria moonguse 
    nombre: {
        type: String,
        required: true,
        trim: true // te limpia de espacios que nos sobram
    },
    planta: {
        type: Number,
        required: true,
        trim: true // te limpia de espacios que nos sobram
    },
    puerta: {
        type: Number,
        required: true,
        trim: true // te limpia de espacios que nos sobram
    },
    siblings: [{ type: String }]// esto es un emeplo de un array, se pueden poner mas datos
});

const Aula = mongoose.model('Aula',aulaSchema); // aqui todas las mayusculas siempre iran asi, en todos los modelos

module.exports = Aula; //lo exportamos