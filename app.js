const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db'); // Asegúrate de que la ruta sea correcta
const User = require('./models/user'); // Ajusta la ruta según tu estructura
const Goal = require('./models/goal'); // Ajusta la ruta según tu estructura
const Mission = require('./models/mission'); // Ajusta la ruta según tu estructura

const app = express();
const port = 3000;

// Conectar a la base de datos
connectDB();

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.json());

// Resto de tu aplicación Express aquí...

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});