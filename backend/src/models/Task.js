
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  dueDate: {
    type: Date,
  },
  isImportant: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
  },
});

taskSchema.virtual('dueInDays').get(function () {
  if (!this.dueDate) {
    return null;
  }
  const today = new Date();
  const due = new Date(this.dueDate);
  const diffTime = due.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
});

taskSchema.virtual('urgencyScore').get(function () {
  let score = 0;
  if (this.isImportant) {
    score += 10;
  }
  if (this.dueInDays > 0) {
    score += 30 - this.dueInDays;
  }
  return score;
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
