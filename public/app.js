$(document).ready(function () {
    $.getJSON("/api/todos")
        .then(addTodos)
});

function addTodos(todos) {
    todos.forEach(element => {
        var newTodo = $("<li class='task'>" + element.name + "</li>");
        if (element.completed) {
            newTodo.addClass("done");
        }
        $('.list').append(newTodo);
    });
};