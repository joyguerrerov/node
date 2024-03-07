//esto es una funcion CRUD

const getBike = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'has hecho un get'
    });
}

const createBike = async (req, res, next) => {
    res.status(201).json({
        status: 201,
        message: 'has hecho un post'
    });
}


const updateBike = async (req, res, next) => {
    res.status(201).json({
        status: 201,
        message: 'has hecho un patch'
    });
}


const deleteBike = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'has hecho un delete'
    });
}


module.exports = { getBike, createBike, updateBike, deleteBike }