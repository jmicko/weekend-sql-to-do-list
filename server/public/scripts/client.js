console.log('js');

$(document).ready(onLoad);

function onLoad() {
    console.log('jq');
    addClickHandlers();
    refreshList();
}

function addClickHandlers() {
    $('.new-to-do-buttons').on('click', addTodo),
        $("#to-do-list").on('click', '.btn-complete', completeTask)
    $("#to-do-list").on('click', '.btn-delete', deleteTask)
}

function addTodo(event) {
    event.preventDefault();
    // switch focus from button back to input after click
    $('#new-to-do-in').focus();
    console.log('clicked add to-do button');

    // capture the value of the input field
    // this object could later be used to send other data like a priority flag, or color category tag etc
    let todo = { task: $('#new-to-do-in').val() };
    // check if there was anything in the input. If there was, send it. If not, ignore button press
    // cursor will have been refocused on input so we can leave it at that
    if (todo.task.length !== 0) {
        $.ajax({
            type: 'POST',
            url: '/todos',
            // send the todo object containing the text of the input to the server
            data: todo,
        }).then(function (response) {
            console.log('Response from server.', response);
            // clear the list upon positive response from server
            $('#new-to-do-in').val('');
            // refresh list with new data
            refreshList();
            // catch errors
        }).catch(function (error) {
            console.log('Error in POST', error)
            alert('Unable to add todo at this time. Please try again later.');
        });
    } else {
        // if there is nothing in the input field, do nothing
        console.log('nothing there!');
    }
}

function completeTask() {
    console.log('in completeTask');
    // send status and id to server via PUT route
    // save the book data from the row
    let todo = $(this).closest('div.to-do').data('todo');
    let row = $(this).closest('div.to-do');
    console.log('-----------logging todo id', todo.id);
    console.log('-----------logging todo status', todo.status);

    $.ajax({
        method: 'PUT',
        // go to the the put route with the todo id
        url: `/todos/${todo.id}`,
        // send the current complete/incomplete status along with
        // makes for one less db query on the server side since we already know the satus from earlier. This is more efficient
        data: { status: todo.status }
    }).then(function (response) {
        // update the dom after success
        refreshList();
        // catch errors
    }).catch((error) => {
        console.log('error from db', error);
        res.sendStatus(500);
    })
    refreshList()
}

function deleteTask() {
    console.log('in deleteTask function');
    // delete button has been pressed
    // find the closest table row to that button. It will contain everything about the todo
    let todo = $(this).closest('div.to-do').data('todo');
    let row = $(this).closest('div.to-do');
    console.log('-----------logging todo id', todo.id);
    $.ajax({
        type: 'DELETE',
        url: `/todos/${todo.id}`
    }).then(function (response) {
        // get rid of the row once we get success message from server
        $(row).empty();
        // get the updated todo list from the server
        refreshList();
        // catch errors
    }).catch(function (error) {
        console.log('Error in POST', error)
        alert('Unable to delete todo at this time. Please try again later.');
    });
}


function refreshList() {
    console.log('in refreshList');
    // GET route to retrieve all todos from db
    $.ajax({
        type: 'GET',
        url: '/todos'
    }).then(function (response) {
        console.log(response);
        // render all todos from response from server
        renderList(response);
        // catch errors
    }).catch(function (error) {
        console.log('error in GET', error);
    });

}

function renderList(list) {
    console.log('in the renderList function', list);
    // clear list on DOM
    $('#incomplete-todos').empty();
    $('#complete-todos').empty();
    // iterate through all todos one at a time
    for (const todo of list) {
        // creat a div element with the status as a class for easier styling
        let $div = $(`<div class="to-do ${todo.status}"></div>`);
        // append the todo data for retrieval later on DELETE or PUT routes
        $div.data('todo', todo);
        // append the text of the todo along with the buttons in a separate div to style with css grid
        $div.append(`
        <div class="to-do-text">
            <p class="to-do-p">${todo.task}</p>
        </div>
        <div class="to-do-buttons">
            <button class="btn-complete">complete</button>
            <button class="btn-delete">delete</button>
        </div>
        `);
        // append to the appropriate area based on the status. compled todos go at the bottom, incomplete go at the top
        // they come back from the server sorted by date created, so only need to be sorted by status here
        if (todo.status === 'incomplete') {
            $('#incomplete-todos').append($div);
        } else {
            $('#complete-todos').append($div);
        }
    }
}