# Project Checklist

This is an application project to manage task lists, developed using Node.js and MongoDB. The application allows you to create, view, update and delete task lists, as well as add and remove tasks from lists.

# Settings

To use the project, you need to have Node.js and MongoDB installed on your computer. After cloning the repository, run the following command to install the dependencies:

        npm install

Then run the following command to launch the application:

        npm start

The application will start on port 3000.

# Structure of the project

The project is divided into four main files:

    app.js: application's main file, where the application's middleware and routes are defined.
    index.js: file with the application's main routes, which do not depend on any specific task list.
    checklist.js: file with routes to manage task lists.
    task.js: file with routes to manage tasks.

# routes

The application has the following routes:

    GET /: application's main route, which displays a page with information about the application.
    GET /checklist: route that displays the list of all checklists.
    GET /checklist/new: route that displays the form for creating a new checklist.
    POST /checklist: route that creates a new checklist.
    GET /checklist/:id: route that displays a list of specific tasks, with their respective tasks.
    GET /checklist/:id/edit: Route that displays the form for editing a checklist.
    PUT /checklist/:id: route that updates a checklist.
    DELETE /checklist/:id: route that deletes a checklist.
    GET /checklist/:id/tasks/new: route that displays the form for adding a new task to a task list.
    POST /checklist/:id/tasks: route that creates a new task in a task list.
    DELETE /tasks/:id: route that deletes a task from a task list.

# Database

The application uses MongoDB as a database. The connection to the database is made through the config/database.js file. The database schema is defined in the models/checklist.js and models/task.js files.

# middleware

The application uses the following middleware:

    express.json(): middleware to parse the body of requests in JSON format.
    express.urlencoded({extended:true}): middleware for parsing request bodies in URL-encoded format.
    methodOverride('_method', {methods:['POST', 'GET']}): middleware to use HTTP methods like PUT and DELETE.
    express.static(path.join(__dirname,'public')): middleware for serving static files in the public folder.
    log: middleware to log requests.

# Author

Developed by Bruno-freire in OneBitCode classes.    
