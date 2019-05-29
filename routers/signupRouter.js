var express = require("express");
var User = require("../models/user");
var router = express.Router();
var controller = require("../controllers/signupController");

var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_s_id) {
        res.redirect("/game");
    } else {
        next();
    }
};

router.get("/", sessionChecker, controller.index)
    .post("/", (req, res) => {
        if (req.body.username == "" || req.body.password == "" || req.body.email == "") {
            res.redirect("/signup");
        }
        else
        {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
            .then(user => {
                req.session.user = user.dataValues;
                res.redirect("/game");
            })
            .catch(error => {
                res.redirect("/signup");
            });
        }
    });

module.exports = router;