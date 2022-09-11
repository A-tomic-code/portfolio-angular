function errorHandling(err, req, res, next){
    res.status(500).json({
        message: 'SERVER ERROR'
    })
}

module.exports = errorHandling