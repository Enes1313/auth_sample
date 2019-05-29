var express = require("express");
var controller = require("../controllers/gameController");
var router = express.Router();

var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_s_id) {
        next();
    } else {
        res.redirect("/login");
    }
};

router.get('/', sessionChecker, controller.index);

module.exports = router;