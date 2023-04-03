const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://0.0.0.0/todoList', { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Conectado ao mongoDB'))
.catch((err) => {console.log(err.message)})