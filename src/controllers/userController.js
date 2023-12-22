const User = require('../models/user'); // Ajusta la ruta según tu estructura

// Controlador para crear un nuevo usuario
exports.createUser = async (req, res) => {
  try {
    const { email, password, avatarUrl } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }

    // Crear un nuevo usuario con avatar
    const newUser = new User({ email, password, avatarUrl });
    await newUser.save();

    res.status(201).json({ mensaje: 'Usuario creado con éxito' });
  } catch (error) {
    console.error('Error al crear un usuario:', error.message);
    res.status(500).json({ error: 'Error al crear un usuario' });
  }
};

// Controlador para obtener información de un usuario por su ID
exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error al obtener información del usuario:', error.message);
    res.status(500).json({ error: 'Error al obtener información del usuario' });
  }
};

// Controlador para actualizar la información de un usuario
exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { email, password, avatarUrl } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Actualizar la información del usuario, incluyendo el avatar
    user.email = email || user.email;
    user.password = password || user.password;
    user.avatarUrl = avatarUrl || user.avatarUrl;

    await user.save();

    res.json({ mensaje: 'Usuario actualizado con éxito' });
  } catch (error) {
    console.error('Error al actualizar un usuario:', error.message);
    res.status(500).json({ error: 'Error al actualizar un usuario' });
  }
};