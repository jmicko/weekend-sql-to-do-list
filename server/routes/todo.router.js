const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// GET all todos and return to client
router.get('/', (req, res) => {
    // get all todos in order of when they were created
    let queryText = `SELECT * FROM "todos" ORDER BY created_at DESC;`;
    pool.query(queryText)
        .then(result => {
            // Sends back the results in an object
            res.send(result.rows);
        }).catch(error => {
            console.log('error getting books', error);
            res.sendStatus(500);
        });
});

// adds a new todo
router.post('/', (req, res) => {
    let newTodo = req.body;
    console.log(`Adding todo`, newTodo);

    // set up the command for the database to insert the new todo
    let queryText = `INSERT INTO "todos" ("task")
                     VALUES ($1);`;
    // connect to db via pool, and send command
    pool.query(queryText, [newTodo.task])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error adding new todo`, error);
            res.sendStatus(500);
        });
});


// Removes a todo
// Request must include a parameter indicating what book to delete - the id
router.delete('/:id', (req, res) => {
    let id = req.params.id; // id of the thing to delete
    console.log('Delete route called with id of', id);

    // set up the command for the database to insert the new todo
    let sqlText = `DELETE FROM todos WHERE id=$1;`;
    // connect to db via pool, and send command
    pool.query(sqlText, [id])
        .then((result) => {
            console.log('got back', result.rows);
            res.send(result.rows);
        }).catch((error) => {
            console.log('error from db', error);
            res.sendStatus(500);
        })
});

// completes a todo
// Request must include a parameter indicating what todo to update - the id
// Request body must include the content to update - the status
router.put('/:id', (req, res) => {
    let todo = req.body; // Book with updated status
    let id = req.params.id; // id of the todo to update
    console.log(`Updating todo ${id} with current status of`, todo.status);
    // set a blank string variable. It will change based on current status 
    let sqlText = '';
    // if statement checks todo status, and changes it to the opposite
    if (todo.status === 'complete') {
        console.log('it is complete');
        sqlText = `UPDATE todos SET status='incomplete' WHERE id=$1;`
    } else {
        console.log('it is incomplete');
        sqlText = `UPDATE todos SET status='complete' WHERE id=$1;`
    }
    // connect to db and send the appropriate command
    pool.query(sqlText, [id])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error from db', error);
            res.sendStatus(500);
        })
});





module.exports = router;