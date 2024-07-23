const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
  dueDate: String,
  priority: String,
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('Task', TaskSchema)