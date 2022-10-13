var mysql = require('mysql');
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

module.exports = conexion;