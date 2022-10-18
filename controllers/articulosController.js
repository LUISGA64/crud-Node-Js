const { json } = require('express');
const conexion = require('../config/conexion');
var articulo = require('../model/articulo');
const productSchema = require('../model/articulo');

module.exports = {
    index: function(req, res) {
        /*articulo.obtener(conexion, function(err, datos) {
            console.log(datos);
            res.render('articulos/index', { title: 'Articulos', articulos: datos });
        });*/
        productSchema
            .find()
            .then((data) => res.json(data))
            .catch((error) => json(error));
            //res.render('articulos/index',{title: 'articulos', articulos:req});
    },

    crear: function(req, res) {
        res.render('articulos/crear');
    },

    guardar: function(req, res) {

        /*console.log("----------------")
        console.log(req.body);
        console.log("----------------")
        console.log(req.file.filename);
        console.log("----------------")*/

        /*articulo.insertar(conexion, req.body, req.file, function(error) {
            res.redirect('/articulos');
        });*/
    
        const product = productSchema(req.body, req.file);
        console.log("----- body  ----");
        console.log(req.body);
        var b = req.body;
        console.log("----- file ----")
        console.log(req.file);
        product
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json(error));
    }
}


//articulo.insertar(conexion, data, function(err) {
//            res.redirect('/articulos');