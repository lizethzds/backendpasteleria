const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        // name of your api
        title: 'Pasteleria API backend',
        description: 'Esta es la API del backend del proyecto fina para Tecnologías Web'
    },
    host: 'localhost:3000'
}

// Se generará un nuevo archivo con la documentación
const outputFile = './swagger-output.json'
const routes = ['./index.js']

// Se general la documentación
swaggerAutogen(outputFile, routes, doc)