$(document).ready(function () {
    $.getJSON("/api/todos")
        .then(loadTodos)

    $("#todoInput").keypress(function (event) {
        if (event.which == 13) {
            createTodo();
        }
    });
});

function loadTodos(todos) {
    todos.forEach(element => {
        addTodo(element);
    });
};

function addTodo(todo) {
    var newTodo = $("<li class='task'>" + todo.name + "</li>");
    if (todo.completed) {
        newTodo.addClass("done");
    }
    $('.list').append(newTodo);
}

function createTodo() {
    var usrInput = $("#todoInput").val();
    $.post("/api/todos", {
            name: usrInput
        })
        .then(function (newTodo) {
            $("#todoInput").val('');
            addTodo(newTodo);
        })
        .catch(function (err) {
            console.log(err);
        })
}