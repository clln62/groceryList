const express = require('express');
const db = require('../database/database.js');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.json());

app.use('/', express.static(path.resolve('client/dist')));

/* 
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                Your code goes here!
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
*/ 


app.listen(3000, () => console.log('Server running on port 3000'));

