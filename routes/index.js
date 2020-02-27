var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function (req, res, next) {
    res.render('home');
});

router.get('/login', function (req, res, next) {
    res.render('login');
});
router.get('/terminos', function (req, res, next) {
    res.render('terminos');
});

module.exports = router;
