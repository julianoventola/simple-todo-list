$(document).ready(function () {
    $.getJSON("/api/todos")
        .then(loadTodos)

    $("#todoInput").keypress(function (event) {
        if (event.which == 13) {
            createTodo();
        }
    });

    $('.list').on('click', 'span', function() {
        removeTodo($(this).parent());
    });
});

function loadTodos(todos) {
    todos.forEach(element => {
        addTodo(element);
    });
};

function addTodo(todo) {
    var newTodo = $("<li class='task'>" + todo.name + "<span>X</span></li>");
    newTodo.data('id', todo._id);
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

function removeTodo(todo) {
    var clickedId = todo.data('id');
        $.ajax({
            method:'DELETE',
            url : '/api/todos/'+ clickedId
        })
        .then(function() {
            todo.remove();
        })
        .catch(function(err) {
            console.log(err);            
        })
}