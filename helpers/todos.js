const db = require('../models');

exports.getTodos =  function name(req, res) {
    //set a promisse to get all values from mongodb
    db.Todo.find()
    .then(function(todos) {
        res.json(todos);
    })
    .catch(function(err) {
        res.send(err);
    })
};

exports.createTodo =  function name(req, res) {
    //set a promisse to inset a value in db
    db.Todo.create(req.body)
    .then(function name(newTodo) {
        res.status(201).json(newTodo);
    })
    .catch(function name(err) {
        res.send(err);
    })
};

exports.getTodo =  function name(req, res) {
    db.Todo.findById(req.params.todoId)
    .then(function name(foundTodo) {
        res.json(foundTodo);
    })
    .catch(function name(err) {
        res.send(err);
    })
};

exports.updateTodo = function name(req, res) {
    db.Todo.findOneAndUpdate({_id : req.params.todoId}, req.body, {new: true})
    .then(function name(todo) {
        res.json(todo)
    })
    .catch(function name(err) {
        res.send(err);
    })
}

exports.deleteTodo = function name(req, res) {
    db.Todo.deleteOne({_id : req.params.todoId})
    .then(function() {
        res.json({message:"Deleted!"});
    })
    .catch(function(err) {
        res.send(err);
    })
}

module.exports = exports;