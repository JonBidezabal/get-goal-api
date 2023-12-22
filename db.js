const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('tu_url_de_conexion', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Conexión a la base de datos establecida correctamente');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
    process.exit(1); // Salir del proceso con un código de error
  }
};

module.exports = connectDB;