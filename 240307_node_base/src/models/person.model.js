// Esto es para crear una entidad 


// el nombre de modelo es en mayusacula siempre
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({// esto es un esquema de la libreria moonguse 
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

const Person = mongoose.model('Person', personSchema); // aqui todas las mayusculas siempre iran asi, en todos los modelos

module.exports = Person; //lo exportamos