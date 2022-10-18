var express = require('express');
var router = express.Router();
var multer = require('multer');
var fecha = Date.now();

//trabajando con Mongoose
const productSchema = require("../model/articulo");

//diskStorage
var storage = multer.diskStorage({
    destination: function(request, file, callback) {
        callback(null, './public/images/');
    },
    filename: function(request, file, callback) {
        //console.log(file);
        callback(null, file.originalname + '-' + Date.now());
    }
});

var cargar = multer({ storage: storage });


//Imports
const articulosController = require("../controllers/articulosController");

/* GET home page. */
router.get('/', articulosController.index);

router.get('/crear', articulosController.crear);

router.post("/", cargar.single("imagen"), articulosController.guardar);



module.exports = router;