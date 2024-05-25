const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const errorhandler = require('./middlewares/errorhandler');

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

app.get('*', (req, res) => {
    res.status(404).send('Ruta no encontrada');
});

app.use(errorhandler);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Aplicación escuchando en el puerto ${process.env.SERVER_PORT}`);
});
