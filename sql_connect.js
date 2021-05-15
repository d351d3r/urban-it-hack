function init(){
    const mysql      = require('mysql');
    const connection = mysql.createConnection({
        host     : '192.168.8.190',
        user     : 'urban1',
        database: "urban1",
        password : 'O9jGF8'
    });

    connection.connect();

    connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
        if (err) throw err;
        console.log('The solution is: ', rows[0].solution);
    });

    connection.end();
}

module.exports = {
    init
}