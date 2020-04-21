const mysql = require('mysql');
 

const connect = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'Groceries'
});



module.exports = connect;