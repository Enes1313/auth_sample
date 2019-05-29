var express = require("express");
var User = require("../models/user");
var router = express.Router();
var controller = require("../controllers/loginController");

var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_s_id) {
        res.redirect("/game");
    } else {
        next();
    }
};

router.get("/", sessionChecker, controller.index)
    .post("/", (req, res) => {
        var username = req.body.username, password = req.body.password;

        User.findOne({ where: { username: username } }).then(function (user) {
            if (!user) {
                res.redirect("/login");
            } else if (!user.validPassword(password)) {
                res.redirect("/login");
            } else {
                req.session.user = user.dataValues;
                res.redirect("/game");
            }
        });
    });

module.exports = router;
