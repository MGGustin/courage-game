var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var Sequelize = require("sequelize");
var mysql = require('mysql');
var passport = require('passport');
var env = require('dotenv').load();


// sequelize initialization
// var sequelize = new Sequelize("postgres://username:password@localhost:5432/dbname");
 
// //sync the model with the database
// sequelize.sync().success(function (err) {
//     app.get("/users", userService.get);
//     app.post("/users", userService.create);
// });
var app = express();



var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(session({
    secret: 'keyboard', 
    resave: true, 
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

////////////////////////ROUTES///////////////////////////////
require('./routes/html_routes.js')(app);
require('./routes/user_routes.js')(app);
require('./config/passport/passport.js')(passport, models);
var db = require('./models/index.js');
var authRoute = require('./routes/auth_routes.js')(app, passport);
var models = require('./models');




models.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
});