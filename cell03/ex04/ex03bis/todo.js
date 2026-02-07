$(document).ready(function () {
    loadTodos();

    $("#newTodoBtn").on("click", function () {
        newTodo();
    });
});

function newTodo() {
    var text = prompt("Enter a new TO DO:");

    if (!text || text.trim() === "") {
        return;
    }

    addTodo(text.trim());
    saveTodos();
}

function addTodo(text) {
    var $ftList = $("#ft_list");

    var $div = $("<div></div>")
        .addClass("todo")
        .text(text);

    $div.on("click", function () {
        if (confirm("Do you want to delete this TO DO?")) {
            $(this).remove();
            saveTodos();
        }
    });

    $ftList.prepend($div);
}

function saveTodos() {
    var todos = [];

    $(".todo").each(function () {
        todos.push($(this).text());
    });

    document.cookie =
        "todos=" +
        encodeURIComponent(JSON.stringify(todos)) +
        "; path=/";
}

function loadTodos() {
    var cookies = document.cookie.split("; ");

    for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split("=");

        if (parts[0] === "todos") {
            var todos = JSON.parse(decodeURIComponent(parts[1]));

            for (var j = todos.length - 1; j >= 0; j--) {
                addTodo(todos[j]);
            }
        }
    }
}