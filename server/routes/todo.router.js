const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// GET all todos
router.get('/', (req, res) => {
    // get all todos in order of when they were created
    let queryText = `SELECT * FROM "todos" ORDER BY created_at DESC;`;
    pool.query(queryText).then(result => {
      // Sends back the results in an object
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error getting books', error);
      res.sendStatus(500);
    });
  });





module.exports = router;