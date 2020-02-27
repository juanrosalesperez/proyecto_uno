//Requerimos la libreria de mysql para poder crear la conexion
var mysql = require("mysql");

//utilizamos el metodo createConnection de mysql para
//crear la conexion
var connection = mysql.createConnection({
    //host -->  el host en el que estamos tabajando
    host: "localhost",
    //user --> nombre del usuario de Base de datos
    user: "root", //(datos de mysql)
    //password --> contaseña del usuario de Base de datos
    password: "root", //(datos de mysql)
    //database --> el nombre de la base de datos que voy a utilizar
    database: "shop"
});

//hacemos la conexion y le introducimo una function para solventar
//los posibles errores
connection.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log("Conexion a BD correcta");
    }
});

module.exports = connection;
