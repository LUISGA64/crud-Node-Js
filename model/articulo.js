// ESTE ES EL MODELO DE LA ENTIDAD ARTICULOS
/*
module.exports = {
    obtener: function(conexion, funcion) {
        conexion.query("select * from articulos", funcion);
    },
    insertar: function(conexion, datos, archivos, funcion) {
        conexion.query("INSERT INTO articulos (articulo, descripcion, precio, caracteristicas, imagen) VALUES (?,?,?,?,?)", [datos.articulo, datos.descripcion, datos.precio, datos.caracteristicas, archivos.filename], funcion);
    }
}*/

const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    urlImage: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    features: {
        type: String,
        required: true
    },
    price: {
        type:
    }
});