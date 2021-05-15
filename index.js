function init() {
    const mysql = require('mysql');

// Get the Host from Environment or use default
    const host = process.env.DB_HOST || '192.168.8.190';

// Get the User for DB from Environment or use default
    const user = process.env.DB_USER || 'urban1';

// Get the Password for DB from Environment or use default
    const password = process.env.DB_PASS || 'O9jGF8';

// Get the Database from Environment or use default
    const database = process.env.DB_DATABASE || 'urban1';

// Create the connection with required details
    const con = mysql.createConnection({
        host, user, password, database,
    });

    const query = "SELECT * FROM users";

// make to connection to the database.
    con.connect(function (err) {
        if (err) throw err;

        // if connection is successful
        con.query(query, (err, result, fields) => {
            // if any error while executing above query, throw error
            if (err) throw err;

            // if there is no error, you have the result
            console.log(result);
        });
    });
}
module.exports = {
    init
}