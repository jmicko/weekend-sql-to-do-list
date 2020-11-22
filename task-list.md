# Appearance
## [x] main container div
>   - CSS properties
>       - [x] css grid
>       - [x] centered
>       - [ ] shadow
>       - [x] text-align center
>   - [x] new todo area 
>       - [x] text-align left
>       - [x] input field for new to-do
>       - [x] submit to-do button
>           - [x] trigger post route to send a todo
>           - [x] trigger get route to refresh todos
>   - [x] todo list
>       - [x] text-align left
>       - [x] get route to get all todos from server on page load
>       - [x] list all todos
>       - ### Each todo should have
>           - [x] css grid maybe?
>           - [x] complete button
>               - [x] trigger post route to add to db
>           - [x] delete button 
>               - [x] trigger delete route to delete from db
>           - [x] actual task, p tag is okay
>           - [x] data portion to store todo ID
>           - [x] styling
>               - [x] color to reflect completion or still need to do
>               - [x] slight margin to seperate form others
>               - [ ] confirm delete

# Client side Functions

## [x] onLoad
>   - [x] add handlers
>       - [x] click add-to-do button
>       - [x] click complete button
>       - [x] click delete button
>       - [ ] click update button (if I get to it)
>   - [x] refreshList

## [x] addTodo
>   - [x] post route
>   - [x] refrreshList()

## [x] completeTask
>   - [x] send status and id to put route
>   - [x] refreshList

## [x] deleteTask
>   - [x] send id to delete route

## [] updateTask (?)
>   - [] put route
>       - [] open new input field with new submit button
>       - [] grab text from new input field on new button click
>       - [] package text, status, and id together and send through put route
            
## [x] refreshList
>   - [x] get route 
>       - [x] render complete todos
>       - [x] render incomplete todos


# Server side
## [] Routes
>   - [x] set up router to export routes
>       - [x] get
>           - [x] get all incomplete todos, sorted by date created
>           - [x] get all incomplete todos, sorted by date completed
>       - [x] post
>           - [x] grab todo text from input
>           - [x] send todo to server
>       - [x] delete
>           - [x] delete todo by id
>       - [x] put
>           - [x] change status
>           - [] change text of todo if I have time

## Pool 
>   - [x] set up pool to connect to db

## Database
>   - [x] todos table
>       - [x] id
>       - [x] task
>       - [x] status
>       - [x] created
>           - [x] auto timestamp
>       - [x] completed 
>           - [] auto timestamp
