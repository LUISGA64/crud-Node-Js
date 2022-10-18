// ESTE ES EL MODELO DE LA ENTIDAD ARTICULOS
/*
module.exports = {
    obtener: function(conexion, funcion) {
        conexion.query("select * from articulos", funcion);
    },
    insertar: function(conexion, datos, archivos, funcion) {
        conexion.query("INSERT INTO articulos (articulo, descripcion, precio, caracteristicas, imagen) VALUES (?,?,?,?,?)", 
        [datos.articulo, datos.descripcion, datos.precio, datos.caracteristicas, archivos.filename], funcion);
    }
}*/
const mongoose = require('mongoose');
var productSchema = mongoose.Schema({
    articulo: {
        type: String
    },
    imagen: {
        type: String
    },
    descripcion: {
        type: String,
    },
    caracteristicas: {
        type: String,
    },
    precio: {
        type:Number,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product',productSchema);