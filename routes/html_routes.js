var path = require('path');

module.exports = function(app) {
    
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
        // res.json({ success: true });
    });

    app.get('/level-1', function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/level-1.html"));
    });

    app.get('/level-2', function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/level-2.html"));
    });

    app.get('/level-3', function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/level-3.html"))
    })

    app.get('/signup', function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/signup.html"))
    })

    //app.use(function(req, res) {
       // res.sendFile(path.join(__dirname, "/../public/home.html"));
    //});
}