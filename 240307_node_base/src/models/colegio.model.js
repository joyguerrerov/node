const mongoose = require('mongoose');

const colegioSchema = new mongoose.Schema({// esto es un esquema de la libreria moonguse 
    nombre: {
        type: String,
        required: true,
        trim: true // te limpia de espacios que nos sobram
    },
    calle: {
        type: String,
        required: true,
        trim: true // te limpia de espacios que nos sobram
    },
    ciudad: {
        type: Number,
        required: true,
        trim: true // te limpia de espacios que nos sobram
    },
    siblings: [{ type: String }]// esto es un emeplo de un array, se pueden poner mas datos
});

const Colegio = mongoose.model('Colegio', colegioSchema); // aqui todas las mayusculas siempre iran asi, en todos los modelos

module.exports = Colegio; //lo exportamos