# Task Manager App

A simple Task Manager application built with Node.js, Express, MongoDB, and GraphQL.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## Introduction
This is a Task Manager application that allows users to create, update, and delete tasks. It also supports querying tasks using GraphQL.

## Features
- Create a new task
- Update an existing task
- Delete a task
- Query tasks using GraphQL

## Prerequisites
- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)
- MongoDB (>=4.x)

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/task-manager.git
    cd task-manager
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Ensure MongoDB is running on your local machine or provide a MongoDB URI.

## Configuration
Create a `.env` file in the root directory and add the following:
```plaintext
PORT=4000
MONGODB_URI=mongodb://localhost:27017/taskmanager
```

## Running the Application
To start the application, run:
```sh
npm start
# or
yarn start
```

By default, the application will run on `http://localhost:4000`.

## API Endpoints
The following are the main API endpoints:

### GraphQL
- **URL**: `http://localhost:4000/graphql`
- Use GraphQL queries and mutations to interact with the API.

#### Example Queries

- **Get All Tasks**:
    ```graphql
    query {
      tasks {
        id
        title
        description
        completed
      }
    }
    ```

- **Create a Task**:
    ```graphql
    mutation {
      createTask(input: {
        title: "New Task",
        description: "Task description"
      }) {
        id
        title
        description
        completed
      }
    }
    ```

## Technologies Used
- **Node.js**: JavaScript runtime
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **GraphQL**: Query language for your API
