app.get('/bebidas', (request, response) => {

    //request -> comanda del camarero
    console.log(request.query);
    const bebida = request.query.bebida; // query. es una consulta
    // Valide si la bebida que pide el cliente es una de las sieguientes = [ fanta, agua, vino, ron ]
    // si no es, decimos que no está en el menú

    const bebidasMenu = ['fanta', 'agua', 'vino', 'ron' ];

        if (bebidasMenu.includes(bebida)) {
        //response -> lo que le devuelvo al cliente
            response.status(200).json({
            status: 200,
            message: `Gracias, aqui tiene su ${bebida}`
            })
        } else {
            response.status(404).json({
            status: 404,
            message: `Lo que ha pedido ${bebida} no está en el menu`
                })
            }
});// si pongo en la web http://localhost:3000/bebidas?bebida=cafe me dira --> "Lo que ha pedido cafe no esta en el menu"


app.get('/postres', (request, response) => {

    console.log(request.query);
    const postre = request.query.postre;
    const postresMenu = ['tarta', 'fruta', 'natilla', 'flan' ];

        if (postresMenu.includes(postre)) {
            response.status(200).json({
            status: 200,
            message: `Gracias, aqui tiene su ${postre}`
            })
        } else {
            response.status(404).json({
            status: 404,
            message: `Lo que ha pedido ${postre} no esta en el menu`
                })
            }
});// si pongo en la web http://localhost:3000/postres?postre=cafe me dira --> "Lo que ha pedido cafe no esta en el menu"

app.get('/platos', (request, response) => {

    console.log(request.query);
    const plato = request.query.plato;
    const platosMenu = ['sopa', 'macarrones', 'lentejas', 'estofado' ];

        if (platosMenu.includes(plato)) {
            response.status(200).json({
            status: 200,
            message: `Gracias, aqui tiene su ${plato}`
            })
        } else {
            response.status(404).json({
            status: 404,
            message: `Lo que ha pedido ${plato} no esta en el menu`
                })
            }
});