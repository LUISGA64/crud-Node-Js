const conexion = require('../config/conexion');
var articulo = require('../model/articulo');

module.exports = {
    index: function(req, res) {
        articulo.obtener(conexion, function(err, datos) {
            console.log(datos);
            res.render('articulos/index', { title: 'Articulos', articulos: datos });
        });
    },

    crear: function(req, res) {
        res.render('articulos/crear');
    },

    guardar: function(req, res) {

        console.log(req.body);
        console.log('--------------------');
        console.log(req.file.filename);
        articulo.insertar(conexion, req.body, req.file, function(error) {
            res.redirect('/articulos');
        });
    }
}


//articulo.insertar(conexion, data, function(err) {
//            res.redirect('/articulos');