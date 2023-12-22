const mongoose = require('mongoose');
const Goal = require('./models/goal'); // Ajusta la ruta según tu estructura
const Mission = require('./models/mission'); // Ajusta la ruta según tu estructura

const initializeData = async () => {
  try {
    // Crear metas
    const goal1 = await Goal.create({
      title: 'Programador Junior',
      description: 'Conviértete en un programador junior',
    });

    const goal2 = await Goal.create({
      title: 'Especialista en Ciencia de Datos',
      description: 'Conviértete en un especialista en ciencia de datos',
    });

    const goal3 = await Goal.create({
      title: 'Ciberseguridad',
      description: 'Conviértete en un experto en ciberseguridad',
    });

    // Crear misiones para la meta 1 (Programador Junior)
    await Mission.create({
      title: 'Aprender un lenguaje de programación',
      description: 'Selecciona un lenguaje de programación y aprende sus fundamentos',
      order: 1,
      goalId: goal1._id,
    });

    await Mission.create({
      title: 'Desarrollar una aplicación simple',
      description: 'Crea una aplicación sencilla para aplicar tus conocimientos',
      order: 2,
      goalId: goal1._id,
    });

    // Crear misiones para la meta 2 (Especialista en Ciencia de Datos)
    await Mission.create({
      title: 'Estudiar estadísticas y matemáticas',
      description: 'Refuerza tus conocimientos en estadísticas y matemáticas aplicadas',
      order: 1,
      goalId: goal2._id,
    });

    await Mission.create({
      title: 'Aprender herramientas de ciencia de datos',
      description: 'Familiarízate con herramientas como Python, Pandas y Jupyter Notebooks',
      order: 2,
      goalId: goal2._id,
    });

    // Crear misiones para la meta 3 (Ciberseguridad)
    await Mission.create({
      title: 'Estudiar conceptos de seguridad informática',
      description: 'Aprende sobre conceptos clave de seguridad informática',
      order: 1,
      goalId: goal3._id,
    });

    await Mission.create({
      title: 'Practicar pruebas de penetración',
      description: 'Aplica tus conocimientos realizando pruebas de penetración en sistemas',
      order: 2,
      goalId: goal3._id,
    });

    console.log('Datos iniciales creados con éxito');
  } catch (error) {
    console.error('Error al crear datos iniciales:', error.message);
  } finally {
    mongoose.connection.close(); // Cerrar la conexión después de crear datos
  }
};

initializeData();