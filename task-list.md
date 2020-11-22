# Appearance
- [x] main container div
    - 
        - [ ] css grid
        - [ ] centered
        - [ ] shadow
        - [ ] text-align center
    - [ ] new todo area 
        - 
            - [ ] text-align left
            - [ ] input field for new to-do
            - [ ] submit to-do button
                - [ ] trigger post route to send a todo
                - [ ] trigger get route to refresh todos
    - [ ] todo list
        - 
            - [ ] text-align left
            - [ ] get route to get all todos from server on page load
            - [ ] list all todos
                ### Each todo should have
                - [ ] css grid maybe?
                - [ ] complete button
                    - [ ] trigger post route to add to db
                - [ ] delete button 
                    - [ ] trigger delete route to delete from db
                - [ ] actual task, p tag is okay
                - [ ] data portion to store todo ID
                - [ ] styling
                    - [ ] color to reflect completion or still need to do
                    - [ ] slight margin to seperate form others
                    - [ ] confirm delete

# Functions
- [] onLoad
    - 
        - [] add handlers
            - [] click add-to-do button
            - [] click complete button
            - [] click delete button
            - [] click update button (if I get to it)
        - [] refreshList
- [] addTodo
    - 
        - [] post route
        - [] refrreshList()
- [] completeTask
    - [] send status and id to put route
    - [] refreshList
- [] deleteTask
    - [] send id to delete route
- [] updateTask (?)
    - 
        - [] put route
            - [] open new input field with new submit button
            - [] grab text from new input field on new button click
            - [] package text, status, and id together and send through put route
- [] refreshList
    - 
        - [] get route 
            - [] render complete todos
            - [] render incomplete todos


# Routes
- [] get
    - [] get all incomplete todos, sorted by date created
    - [] get all incomplete todos, sorted by date completed
- [] post
    - [] grab todo text from input
    - [] send todo to server
    - [] 
- [] delete
    - [] delete todo by id
- [] put
    - [] change status, change text of todo if I have time

# Database
- [x] todos table
    - [x] id
    - [x] task
    - [x] status
    - [x] created
        - [x] auto timestamp
    - [x] completed 
        - [] auto timestamp
