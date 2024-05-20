const express = require('express')
const dotenv = require('dotenv')
const app = express()


dotenv.config()

app.get("/", (req,res) =>{
    res.send("Holamundo!!!!")
})

app.listen(process.env.SERVER_PORT, () =>{
    console.log(`Aplicacion corriendo en el puerto ${process.env.SERVER_PORT}`)
})