var {Pool} = require('pg')
var pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"students",
    password:"Password1#",
    port:5432

});

module.exports = pool;

