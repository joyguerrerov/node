const getMoto = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'has hecho un get'
    });
}

const createMoto = async (req, res, next) => {
    res.status(201).json({
        status: 201,
        message: 'has hecho un post'
    });
}


const updateMoto = async (req, res, next) => {
    res.status(201).json({
        status: 201,
        message: 'has hecho un patch'
    });
}


const deleteMoto = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'has hecho un delete'
    });
}


module.exports = { getMoto, createMoto, updateMoto, deleteMoto }