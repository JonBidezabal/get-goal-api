const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  selectedGoal: { type: mongoose.Schema.Types.ObjectId, ref: 'Goal' },
  progress: { type: Number, default: 0 },
  avatarUrl: String, // Nuevo campo para la URL del avatar
});

const User = mongoose.model('User', userSchema);

module.exports = User;