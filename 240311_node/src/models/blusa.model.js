const mongoose = require('mongoose');

const blusaSchema = new mongoose.Schema({// esto es un esquema de la libreria moonguse, que te conecta con mongoDB
  
    nombre: {
        type: String,
        required: true,
        trim: true // te limpia de espacios que nos sobram
    },
    codigo: {
        type: Number,
        required: true,
        unique: true // para algo unico que no puede tener nadie mas
    },
    talla: {
        type: String,
        required: true,
    },
    siblings: [{ type: String }]// esto es un emeplo de un array, se pueden poner mas datos
});

const Blusa = mongoose.model('Blusa', blusaSchema); // aqui todas las mayusculas siempre iran asi, en todos los modelos

module.exports = Blusa; //lo exportamos