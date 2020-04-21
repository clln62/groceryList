const db = require('./config');

db.connect( (err) => {
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

module.exports = {db};