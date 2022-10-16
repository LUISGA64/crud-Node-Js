/*var mysql = require('mysql');
var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'articulos',
    user: 'root',
    password: ''
}, 'single');



conexion.connect(
    (err) => {
        if (!err) {
            console.log('Conexion Exitosa');
        } else {
            console.log(err);
        }
    }
);
*/

const mongoose = require('mongoose');
require('dotenv').config();

var conexion = mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('conectado a MongoDB'))
    .catch((error) => console.error(error));

module.exports = conexion;