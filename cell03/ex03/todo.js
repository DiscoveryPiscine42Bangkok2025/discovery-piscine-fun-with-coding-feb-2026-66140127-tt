window.onload = function () {
    loadTodos();
};

function newTodo() {
    var text = prompt("Enter a new TO DO:");

    if (!text || text.trim() === "") {
        return;
    }

    addTodo(text.trim());
    saveTodos();
}

function addTodo(text) {
    var ftList = document.getElementById("ft_list");

    var div = document.createElement("div");
    div.className = "todo";
    div.innerText = text;

    div.onclick = function () {
        if (confirm("Do you want to delete this TO DO?")) {
            ftList.removeChild(div);
            saveTodos();
        }
    };

    ftList.insertBefore(div, ftList.firstChild);
}

function saveTodos() {
    var todos = [];
    var list = document.getElementsByClassName("todo");

    for (var i = 0; i < list.length; i++) {
        todos.push(list[i].innerText);
    }

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