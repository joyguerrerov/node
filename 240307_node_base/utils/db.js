// siempre que usemos mongo, se pondra esto, y usaremos el enlace de mongoDB

const mongoose = require('mongoose');

const pass = "mongodb+srv://joyguerrerov:UPgrade88@cluster0.hn43jda.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectMongo = async () => {
    try {
        const conn = await mongoose.connect(pass);
        console.log('INFO: Conexión a BD correcta:', conn.connection.name)
    } catch (error) {
        console.log('ERROR: (f connectMongo) ->', error.message);
    }
}

module.exports = { connectMongo };