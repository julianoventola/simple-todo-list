const mongoose = require('mongoose');

//set "verbose mode" to run mongoose
mongoose.set('debug', true);

//Connect to the database
mongoose.connect('mongodb://localhost/todo-api', {useNewUrlParser:true});

//set connect as Promise 
mongoose.Promise = Promise;

module.exports.Todo = require('./todo');