const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    token: String
  }

  type Task {
    id: ID!
    title: String!
    description: String
    completed: Boolean!
    dueDate: String
    priority: String
    assignedTo: User
  }

  type Query {
    tasks: [Task]
    task(id: ID!): Task
  }

  type Mutation {
    createTask(title: String!, description: String, dueDate: String, priority: String): Task
    updateTask(id: ID!, title: String, description: String, dueDate: String, priority: String, completed: Boolean): Task
    deleteTask(id: ID!): Boolean
    signup(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
