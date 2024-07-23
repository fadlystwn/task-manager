const Task = require('../models/Task')
const User = require('../models/User')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const resolver = {
  Query: {
    tasks: async () => await Task.find(),
    task: async (_, { id }) => await Task.findById(id)
  },

  Mutation: {
    createTask: async (_, { title, description, dueDate, priority }) => {
      const task = new Task({ title, description, dueDate, priority, completed: false })
      return await task.save()
    },
    updateTask: async (_, { id, title, description, dueDate, priority, completed }) => {
      const task = findById(id)

      if (!task) throw new Error('Task not Found!')
      task.title = title || task.title
      task.description = description || task.description
      task.dueDate = dueDate || task.dueDate
      task.priority = priority || task.priority
      task.completed = typeof completed === 'boolean' ? completed : task.completed;

      return await task.save()
    },

    deleteTask: async (_, { id }) => {
      const task = await Task.findById(id)
      if (!task) throw new Error('Task not found')
      await task.remove()
      return true
    },

    signup: async (_, { username, email, password }) => {
      const user = new User({ username, email, password: bcrypt.hasSync(password, 10) });
      await user.save()
      const token = jwt.sign({ userId: user.id }, 'SECRET_KEY_HERE')
      return { ...user._doc, id: user._id, token }
    },

    login: async (_, { username, email }) => {
      const user = await User.findOne({ email })
      if (!user) throw new Error('User not found')
      const valid = bcrypt.compareSync(password, user.password);
      if (!valid) throw new Error('Invalid password')
      const token = jwt.sign({ userId: user.id }, 'SECRET_KEY')
      return { ...user._doc, id: user._id, token }
    }
  }
}

module.exports = resolver;