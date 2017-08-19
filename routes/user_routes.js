var db = require("../models/index");

module.exports = function(app) {

    // var auth = function(req, res, next){
    //     if (req.session && req.session.user === "amy" && req.session.admin)
    //         return next();
    //     else
    //         return res.sendStatus(401);
    // };

    app.get('/getUser', function (req, res) {
        var UserModel = db.sequelize.models.User;
        UserModel.findAll().then(function(result) {
            console.log('result ', result)
            res.json(result);
        });

    });

    app.post('/signup', function (req, res) {
        var UserModel = db.sequelize.models.User;
        UserModel.create({ username: '', password: '' }).then(function(result) {
            console.log('result ', result)
            res.json(result);
        });

    });

    app.post('/login', function (req, res) {

        console.log('incoming body ', req.body);

        if(req.body.email === "Wormley5@aol.com" && req.body.password === "123hiphop") {
            req.session.user = "Wormley5@aol.com";
            req.session.admin = true;
            console.log('login success')
            res.send("login success");
        }
        else {
            res.send('login failed');
            console.log('login failed');
        };
        // if(!req.params.username === "amy"  || !req.params.password === "amyspassword") {
        //     res.send('login failed');
        //     console.log('login failed');
        // }
    });

    app.get('/logout', function (req,res) {
        req.session.destroy();
        res.send("logout success!");
    });

    app.get('/level-1', function(req, res) {
        res.send("I've logged in succesfully!!")
    });

};

