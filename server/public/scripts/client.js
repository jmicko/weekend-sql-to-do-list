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
    // for of
    // if complete
        // Render completes
    // else
        // render incompletes
    
}