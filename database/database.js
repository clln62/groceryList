const mysql = require('mysql');
 

const con = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'Groceries'
});

con.connect( function (err) {
  if (err) {
      console.error('error connecting:' + err.stack);
    return;
  }
  console.log('Connected to MySql Database!');
});


/* 
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                Your code goes here!
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
*/

module.exports = {con};