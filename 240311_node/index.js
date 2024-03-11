//1- IMPORTAR LIBRERIAS O VARIABLES EXTERNAS

const express = require('express');// esto carga la libreria, recoge/escucha los endpoint y devuelve un resultado, se pone el nombre del archivo ./----

const { connectMongo } = require('./utils/db')

const { tiendaRouter } = require('./src/routes/tienda.route');
const { blusaRouter } = require('./src/routes/blusa.route');
const { vestidoRouter } = require('./src/routes/vestido.route');

//2- CONFIGURACIÓN DE LA APLICACÓN

const PORT = 3001; // es una variable que no cambiara nunca, es un puerto, el canal por el que te escucha
connectMongo();
const app = express();// esto es apra que el primer paso, lo ejecute
app.use(express.json());


//3- ENDPOINTS
// uso las funciones que esten definidas en esa clase, las ejecuta, sirve para manejar un HTTP
// los apuntes de esto estan en peticiones.js +++++++++


app.use('/tienda', tiendaRouter);
app.use('/blusa', blusaRouter);
app.use('/vestido', vestidoRouter);

app.get('/', (request, response) => {
    response.status(200).json({
        status: 200, //esto es el estatus de vuelta
        message: "Bienvenido a mi app"
    })// si lo lanzo en la app postman = localhosts:3000 se ejecutara
})

            // request -> la inforfamcion que te manda el front
            // response -> la informacion que devulvemos al front
            
// 1 o 2 endpoints adicionales, uno con postres y otro con platos


//4-MANEJOS DE ERRORES

/* MANEJO DE ERRORES */

app.use((request, response, next) => {
    let error = new Error();
    error.status = 404;
    error.message = 'Not Found';
    next(error);
});

app.use((error, request, response, next) => {
    return response.status(error.status || 500).json(error.message || 'Unexpected error');
}); // esto nos dira antes de que todo se aruine, nos diga si es un erros 404 o un error 500 

//5- FUNCIÓN DE INICIO 

app.listen(PORT, () => {
console.log(`app running in port ${PORT}`);
});