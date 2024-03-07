//1- IMPORTAR LIBRERIAS O VARIABLES EXTERNAS

const express = require('express') // esto carga la libreria, recoge/escucha los endpoint y devuelve un resultado, se pone el nombre del archivo ./----


//2- CONFIGURACIÓN DE LA APLICACÓN

const PORT = 3000; // es una variable que no cambiara nunca, es un puerto, el canal por el que te escucha
const app = express(); // esto es apra que el primer paso, lo ejecute


//3- ENDPOINTS
// uso las funciones que esten definidas en esa clase, las ejecuta, sirve para manejar un HTTP
// los apuntes de esto estan en peticiones.js +++++++++

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

//5- FUNCIÓN DE INICIO 

app.listen(PORT, () => {
console.log(`app running in port ${PORT}`);
});