const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  missions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mission' }],
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;