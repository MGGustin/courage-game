var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');

var app = express();



var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(session({
    secret: '2C44-4D44-WppQ385', 
    resave: true, 
    saveUninitialized: true
}));

////////////////////////ROUTES///////////////////////////////
require('./routes/html_routes.js')(app);
require('./models/user.js')(app);






app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});