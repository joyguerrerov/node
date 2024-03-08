const getPatin = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'has hecho un get'
    });
}

const createPatin = async (req, res, next) => {
    res.status(201).json({
        status: 201,
        message: 'has hecho un post'
    });
}


const updatePatin = async (req, res, next) => {
    res.status(201).json({
        status: 201,
        message: 'has hecho un patch'
    });
}


const deletePatin = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'has hecho un delete'
    });
}


module.exports = { getPatin, createPatin, updatePatin, deletePatin }