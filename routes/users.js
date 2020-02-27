var express = require("express");
var router = express.Router();

const connection = require("../config/db.js");
//TRAER DATOS DE LA SQL
router.get("/", function (req, res, next) {
    let sql = "SELECT * FROM user";
    connection.query(sql, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.render("users", { data: data });
        }
        console.log(data);
    });
});

//MOSTRAMOS EN PANTALLA LOS DATOS DEL SQL
router.post("/", function (req, res, next) {
    console.log(req.body);


    let name = req.body.name;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let password = req.body.password;
    let is_admin = req.body.is_admin;

    let sql2 = "INSERT INTO user set? ";

    connection.query(
        sql2,
        { name, lastname, email, password, is_admin },
        (err, result) => {
            if (err) {
                throw err;
            }
            res.redirect("/users");
        }
    );
});

//DELETEAMOS UN PARAMETRO
router.get("/delete/:id_user", function (req, res, next) {
    let id = req.params.id_user;

    connection.query("DELETE FROM user WHERE id_user = " + id, function (
        err,
        result
    ) {
        res.redirect("/users");
    });
});

//EDITAMOS UN PARAMETRO
router.get("/edit/:id_user", function (req, res, next) {

    let id = req.params.id_user;

    connection.query(
        "SELECT * FROM user WHERE id_user = ?",
        [id],
        (err, results) => {

            res.render("user", { results: results[0] });
        }
    );
});

//MODIFICAMOS LOS PARAMETROS
router.post("/update/:id_user", function (req, res, next) {

    let id = req.params.id_user;
    let name = req.body.name;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let password = req.body.password;
    let is_admin = req.body.is_admin;
    console.log(req.body)

    connection.query(

        "UPDATE user set? WHERE id_user =" + id,
        { name, lastname, email, password, is_admin },
        (err, result) => {
            console.log(result)
            res.redirect("/users");
        }
    );
});


module.exports = router;
