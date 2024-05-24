const express = require('express')
const cors = require('cors')
var corsOptions = {
    origin:["http://localhost:3001", "http://localhost:8080"],
    methods: "GET, PUT, POST, DELETE",
};
const dotenv = require('dotenv')
const app = express()


dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(cors(corsOptions))

app.use("api/categorias", require('./routes/categorias.routes'))
app.use("api/productos", require('./routes/productos.routes'))

app.get('*', (req,res)=>{
    res.status(404).send
}

);


const errorhandler = require('./middlewares/errorhandler')
app.use(errorhandler)

app.listen(process.env.SERVER_PORT, () =>{
    console.log(`Aplicacion escuchando en el puerto ${process.env.SERVER_PORT}`)
})

