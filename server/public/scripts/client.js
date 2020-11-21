console.log('js');

$(document).ready(onLoad);

function onLoad() {
    console.log('jq');
  addClickHandlers();

}

function addClickHandlers() {
    $('.new-to-do-buttons').on('click', addTodo)
}

function addTodo(event) {
    event.preventDefault();
    this.blur();
    console.log('clicked add to-do button');
}