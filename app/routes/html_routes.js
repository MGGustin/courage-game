var path = require('path');

module.exports = function () {
    
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/.html"));
    });

    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/.html"));
    });
}