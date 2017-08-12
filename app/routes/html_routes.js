var path = require('path');

module.exports = function () {
    
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

    app.get('/level1', function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/level-1.html"));
    });

    app.get('/level2', function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/level-2.html"));
    });

    app.get('/level3', function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/level-3.html"))
    })

    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
}