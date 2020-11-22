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
        $("#to-do-list").on('click', '.btn-delete', deleteTask)
}

function addTodo(event) {
    event.preventDefault();
    // remover focus from button after click
    $('#new-to-do-in').focus();
    console.log('clicked add to-do button');

    console.log('Submit button clicked.');
    let todo = {};
    todo.task = $('#new-to-do-in').val();

    $.ajax({
        type: 'POST',
        url: '/todos',
        data: todo,
        }).then(function(response) {
          console.log('Response from server.', response);
          $('#new-to-do-in').val('');
          refreshList();
        }).catch(function(error) {
          console.log('Error in POST', error)
          alert('Unable to add todo at this time. Please try again later.');
        });
}

function completeTask() {
    console.log('in completeTask');
    // send status and id to server via PUT route
    refreshList()
}

function deleteTask() {
    console.log('in deleteTask function');
    // delete button has been pressed
    // refresh todo list
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
    $('#complete-todos').empty();
    // for of
    for (const todo of list) {
        // if complete
        if (todo.status == 'incomplete') {
            // Render incompletes
            let toDoElement = 
            `<div class="to-do incomplete" data-todo="${todo}">
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
            `<div class="to-do complete" data-todo="${todo}">
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