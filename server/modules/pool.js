const pg = require('pg');

// Set up our pool
const Pool = pg.Pool;

// make our own instance of a Pool from that template Pool object

let config ={}

if ( process.env.DATABASE_URL ) {
  // running remote (heroku)
  config= {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false}
  }
} else {
  // running locally
  config = {
    database: 'weekend-to-do-app', 
    host: 'localhost', 
    port: 5432, 
    max: 10, 
    idleTimeoutMillis: 30000 
  };

}


const pool = new pg.Pool(config);

pool.on("connect", () => {
  console.log("connected to postgres");
});

pool.on("error", (err) => {
  console.log("error connecting to postgres", err);
});

// export pool to the ether
module.exports = pool;