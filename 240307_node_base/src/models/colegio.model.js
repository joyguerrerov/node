const mongoose = require('mongoose');

const colegioSchema = new mongoose.Schema({// esto es un esquema de la libreria moonguse 
    
    nombre: {
        type: String,
        required: true, // si no ponemos esto, no se exportara 
        trim: true // te limpia de espacios que nos sobram
    },
    direccion: {
        type: String,
        required: true,
        trim: true, // te limpia de espacios que nos sobra
        unique: true,
    },
    aulas: [{
        type: mongoose.Schema.Types.ObjectId, // esto siempre igual solo cambia el ref
        ref: "Aula"
    }],
   
});

const Colegio = mongoose.model('Colegio', colegioSchema); // aqui todas las mayusculas siempre iran asi, en todos los modelos

module.exports = Colegio; //lo exportamos