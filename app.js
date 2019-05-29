var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var ejsLayouts = require("express-ejs-layouts");
var app = express();
var sessionStore = new session.MemoryStore();
var COOKIE_SECRET = "serversecret";
//var COOKIE_NAME = "serverid";

// Görüntü motorumuz olarak ejs olduğunu belirtiyoruz.
app.set("view engine", "ejs");
// views klasörünü bağlıyoruz.
app.set("views", path.join(__dirname, "./views"));
// public klasörü sabit dosyaları içerdiğinden
app.use("/public", express.static(path.join(__dirname, "./public")));
// Kullanıcıdan gelen verilere direk erişmek için kullanılan orta yazılım.
app.use(bodyParser.urlencoded({ extended: true }));
// Her sayfada bulunması gereken html sayfası için.
app.use(ejsLayouts);

app.use(cookieParser());

app.use(session({
    //name: COOKIE_NAME,
    store: sessionStore,
    key: "user_s_id",
    secret: COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

require("./routers/routerManager")(app);

app.listen(9000);