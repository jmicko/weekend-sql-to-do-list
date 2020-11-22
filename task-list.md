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
>           - [ ] trigger post route to send a todo
>           - [ ] trigger get route to refresh todos
>   - [x] todo list
>       - [ ] text-align left
>       - [ ] get route to get all todos from server on page load
>       - [ ] list all todos
>       - ### Each todo should have
>           - [ ] css grid maybe?
>           - [ ] complete button
>               - [ ] trigger post route to add to db
>           - [ ] delete button 
>               - [ ] trigger delete route to delete from db
>           - [ ] actual task, p tag is okay
>           - [ ] data portion to store todo ID
>           - [ ] styling
>               - [ ] color to reflect completion or still need to do
>               - [ ] slight margin to seperate form others
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
>   - [] post route
>   - [x] refrreshList()

## [x] completeTask
>   - [] send status and id to put route
>   - [] refreshList

## [x] deleteTask
>   - [] send id to delete route

## [] updateTask (?)
>   - [] put route
>       - [] open new input field with new submit button
>       - [] grab text from new input field on new button click
>       - [] package text, status, and id together and send through put route
            
## [x] refreshList
>   - [] get route 
>       - [] render complete todos
>       - [] render incomplete todos


# Server side
## [] Routes
>   - [] set up router to export routes
>       - [] get
>           - [] get all incomplete todos, sorted by date created
>           - [] get all incomplete todos, sorted by date completed
>       - [] post
>           - [] grab todo text from input
>           - [] send todo to server
>           - [] 
>       - [] delete
>           - [] delete todo by id
>       - [] put
>           - [] change status, change text of todo if I have time

## Pool 
>   - [] set up pool to connect to db

## Database
>   - [x] todos table
>       - [x] id
>       - [x] task
>       - [x] status
>       - [x] created
>           - [x] auto timestamp
>       - [x] completed 
>           - [] auto timestamp
