var login_router = require("./loginRouter");
var logout_router = require("./logoutRouter");
var signup_router = require("./signupRouter");
var game_router = require("./gameRouter");

module.exports = function (app) {
    app.use((req, res, next) => {
        if (req.cookies.user_s_id && !req.session.user) {
            res.clearCookie("user_s_id");
        }
        next();
    });

    app.use("/", login_router);
    app.use("/login", login_router);
    app.use("/logout", logout_router);
    app.use("/signup", signup_router);
    app.use("/game", game_router);

    app.use(function (req, res, next) {
        res.status(404).send("Sayfa Bulunamadı!")
    });
}