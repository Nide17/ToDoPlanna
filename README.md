# ToDoPlanna


## ToDoPlanna - Organize, be productive

ToDoPlanna is a web application that helps you organize your to-do items within a period. With this app, you can create tasks, set their deadlines, and keep track of their progress. This app is implemented using Vite, Typescript, ReactJS, Tailwind, MySQL, and NestJS.

#### Features

    Create a new task
    Edit and update existing tasks
    Set deadlines for tasks
    Mark tasks as completed or uncompleted
    See the progress of each task
    Sort tasks by various parameters (e.g., deadline, completion status)
    Delete tasks

#### Prerequisites

    Node.js (version 14.16 or higher)
    MySQL (version 8.0 or higher)

#### Installation and Usage

Clone the repository to your local machine using the following command:

    git clone https://github.com/Nide17/ToDoPlanna.git

Install dependencies:

    cd ToDoPlanna
    npm install

Create a MySQL database and set up the necessary tables using the schema.sql file in the database directory.

Create a .env file in the root directory of the project and set the following environment variables:

makefile

    DATABASE_HOST=`<your-database-host>`
    DATABASE_USER=`<your-database-username>`
    DATABASE_PASSWORD=`<your-database-password>`
    DATABASE_NAME=`<your-database-name>`

Start the NestJS server:

    npm run start:server

In a new terminal window, start the React app:

    npm run start:client

    Open the app in your browser at http://localhost:3000.

Contributors

    Niyomwungeri Parmenide ISHIMWE

License

This project is licensed under the MIT License - see the LICENSE.md file for details.
