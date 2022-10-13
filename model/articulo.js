module.exports = {
    obtener: function(conexion, funcion) {
        conexion.query("select * from articulos", funcion);
    },
    insertar: function(conexion, datos, archivos, funcion) {
        conexion.query("INSERT INTO articulos (articulo, imagen) VALUES (?,?)", [datos.articulo, archivos.filename], funcion);
    }
}