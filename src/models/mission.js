const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  order: { type: Number, required: true },
  goalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Goal' },
});

const Mission = mongoose.model('Mission', missionSchema);

module.exports = Mission;