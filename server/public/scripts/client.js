console.log('js');

$(document).ready(onLoad);

function onLoad() {
    console.log('jq');
    addClickHandlers();
    refreshList();
}

function addClickHandlers() {
    $('.new-to-do-buttons').on('click', addTodo),
        $('.btn-complete').on('click', completeTask),
        $('.btn-delete').on('click', deleteTask)
}

function addTodo(event) {
    event.preventDefault();
    // remover focus from button after click
    $('#new-to-do-in').focus();
    console.log('clicked add to-do button');
}

function completeTask() {
    console.log('in completeTask');
    // send status and id to server via PUT route
    refreshList()
}

function deleteTask() {
    console.log('in deleteTask function');
    refreshList()
}


function refreshList() {
    console.log('in refreshList');
    // GET route to retrieve all todos from db
    $.ajax({
        type: 'GET',
        url: '/todos'
    }).then(function (response) {
        console.log(response);
        renderList(response);
    }).catch(function (error) {
        console.log('error in GET', error);
    });

}

function renderList(list) {
    console.log('in the renderList function', list);
    // clear list on DOM
    $('#incomplete-todos').empty();
    // for of
    for (const todo of list) {
        console.log(todo.status);
        // if complete
        if (todo.status == 'incomplete') {
            // Render incompletes
            let toDoElement = 
            `<div class="to-do incomplete" data-todo=${todo}>
            <div class="to-do-text">
            <p class="to-do-p">${todo.task}</p>
            </div>
            <div class="to-do-buttons">
            <button class="btn-complete">complete</button>
            <button class="btn-delete">delete</button>
            </div>
            </div>`;
            $('#incomplete-todos').append(toDoElement);
        }
        // else
        else {
            // render completes
            let toDoElement = 
            `<div class="to-do complete" data-todo=${todo}>
                <div class="to-do-text">
                    <p class="to-do-p">${todo.task}</p>
                </div>
                <div class="to-do-buttons">
                    <button class="btn-complete">complete</button>
                    <button class="btn-delete">delete</button>
                </div>
            </div>`;
            $('#complete-todos').append(toDoElement);
        }
    }
}