var express = require("express");

var router = express.Router();

router.get('/', (req, res) => {
    if (req.session.user && req.cookies.user_s_id) {
        res.clearCookie("user_s_id");
        res.redirect("/");
    } else {
        res.redirect("/login");
    }
});

module.exports = router;