const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// const errorhandler = require('./middlewares/errorhandler');

dotenv.config();

const app = express();

var corsOptions = {
    origin: ["http://localhost:3001", "http://localhost:8080"],
    methods: "GET, PUT, POST, DELETE",
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors(corsOptions));

// Asegúrate de que las rutas empiecen con "/"
app.use("/api/categorias", require('./routes/categorias.routes'));
app.use("/api/productos", require('./routes/productos.routes'));
app.use("/api/usuarios", require('./routes/usuarios.routes'))
app.use("/api/roles", require('./routes/roles.routes'))
app.use("/api/auth", require('./routes/auth.routes'))
app.use("/api/archivos", require('./routes/archivos.routes'))
app.use("/api/bitacora", require('./routes/bitacora.routes'))

app.get('*', (req, res) => {
    res.status(404).send('Ruta no encontrada');
});

const errorlogger = require('./middlewares/errorlogger.middleware')
const errorhandler = require('./middlewares/errorhandler.middleware')
app.use(errorlogger, errorhandler)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Aplicación escuchando en el puerto ${process.env.SERVER_PORT}`);
});
