const errorLogger = (err, req, res, next) => {
    //Aqui puedes evitar el error a un archivo de texto
    console.log(err.message)
    next(err)
}

module.exports = errorLogger