#       <-------------------- TourAxis API ----------------------->
                            TourAxis API

TourAxis is a Node.js RESTful application that manages users and tasks for those users. It provides CRUD operations for both users and tasks, and uses MongoDB as the storage mechanism.

## Features

- CRUD operations for users.
- CRUD operations for tasks associated with users.
- Scheduled job to update the status of pending tasks.
- Swagger documentation for easy API testing and visualization.


## Requirements

- Node.js (v14 or later)
- MongoDB
- node-cron

### Setup

1. Clone the repository:

```bash
git clone https://github.com/moses-yabo/TourAxis.git
```

```bash
cd Touraxis
```


2. Install dependencies:

```bash
npm install

```
3. Create a .env file in the root directory and add your MongoDB connection string

```bash
DB_CONNECTION_STRING=mongodb+srv://touraxis:<password>@touraxis.fggzinj.mongodb.net/

```
4. Execute Run Application
```bash
npm start
```

The server will start on http://localhost:3000




### API Endpoints

The application exposes the following RESTful API endpoints:

### Users
- GET /api/users: Retrieve a list of all users.
- POST /api/users: Create a new user.
- GET /api/users/:user_id: Retrieve a single user by ID.
- PUT /api/users/:user_id: Update a user by ID

### Tasks
- GET /api/users/:user_id/tasks: Retrieve a list of all tasks for a user.
- POST /api/users/:user_id/tasks: Create a new task for a user.
- GET /api/users/:user_id/tasks/:task_id: Retrieve a single task by ID.
- PUT /api/users/:user_id/tasks/:task_id: Update a task by ID.
- DELETE /api/users/:user_id/tasks/:task_id: Delete a task by ID.


## Scheduled Job

The application includes a scheduled job that runs periodically to check for tasks with a `status` of "pending" and a `next_execute_date_time` that has passed. These tasks are printed to the console and their status is updated to "done".

