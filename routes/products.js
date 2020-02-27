var express = require("express");
var router = express.Router();
var multer = require("multer");

const connection = require("../config/db.js");

// ESTO ES LO QUE AÑADIMOS PARA LA CONFIGURACION DE UNA IMAGEN--------_ AÑADIR IMAGEN
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads");
    },
    filename: function (req, file, cb) {
        //DE ESTA MANERA TE LO GENERA CON EL NOMBRE ORIGINAL DEL ARCHIVO
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: storage });
//READ
//TRAER DATOS DE LA SQL
//formalario
router.get("/form", function (req, res, next) {
    let sql = "SELECT * FROM product";
    connection.query(sql, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.render("products", { data: data });
        }
    });
});
//todos los productos
router.get("/catalogue", function (req, res, next) {
    let sql = "SELECT * FROM product";
    connection.query(sql, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.render("catalogue", { data: data });
        }
    });

});

//productos por categoria
router.get("/catalogue/:sql_colum/:sql_camp", function (req, res, next) {

    let sql_colum = req.params.sql_colum;
    let sql_camp = req.params.sql_camp;
    let sql = "SELECT * FROM product where " + sql_colum + " = " + "'" + sql_camp + "'";
    connection.query(sql, function (err, data) {
        res.render("family", { data: data });
    });
});

//un producto
router.get("/catalogue/:id_product", function (req, res, next) {
    let id = req.params.id_product;
    connection.query("SELECT * FROM product where id_product = ?", [id], (err, data) => {
        if (err) {
            throw err;
        } else {
            // console.log(data)
            res.render("info", { data: data[0] });
        }
    });

});



//CREATE
//MOSTRAMOS EN PANTALLA LOS DATOS DEL SQL
router.post("/form", upload.single("myFile"), function (req, res, next) {
    console.log(req.body);
    let id_user = req.body.id_user;
    let name_product = req.body.name_product;
    let size = req.body.size;
    let type = req.body.type;
    let category = req.body.category;
    let description = req.body.description;
    let price = req.body.price;
    let stock = req.body.stock;

    let img = "";
    if (req.file && req.file.originalname) {
        img = req.file.originalname
    }
    //ESTA FORMA ES MAS CORTA Y DIRECTA
    let sql2 = "INSERT INTO product set? ";
    connection.query(sql2, { id_user, name_product, size, type, category, description, price, stock, img }, (err, result) => {
        if (err) {
            throw err;
        }

        res.redirect("/home/catalogue");
    });
});

//DELETEAMOS UN PARAMETRO - borra de la BD
router.get("/delete/:id_product", function (req, res, next) {

    let id = req.params.id_product;

    connection.query("DELETE FROM product WHERE id_product = " + id, function (err, result) {
        res.redirect("/home/catalogue");
    });
});

//EDITAMOS UN PARAMETRO - con este es el que pintamos en la pagina de product.ejs
router.get("/edit/:id_product", function (req, res, next) {
    let id = req.params.id_product;

    connection.query("SELECT * FROM product WHERE id_product = ?", [id], (err, results) => {
        res.render("product", { results: results[0] });
    });
});

//MODIFICAMOS LOS PARAMETROS-  no se ve solo se envia la informacion a la BD
router.post("/update/:id_product", upload.single("myFile"), function (req, res, next) {

    let id = req.params.id_product;
    let id_user = req.body.id_user;
    let name_product = req.body.name_product;
    let size = req.body.size;
    let type = req.body.type;
    let category = req.body.category;
    let description = req.body.description;
    let price = req.body.price;
    let stock = req.body.stock;
    let img = "";
    if (req.file && req.file.originalname) {
        img = req.file.originalname
    }

    connection.query(
        "UPDATE product set? WHERE id_product =" + id,
        { id_user, name_product, size, type, category, description, price, stock, img },
        (err, result) => {
            res.redirect("/home/catalogue");
        }
    );
});
module.exports = router;
