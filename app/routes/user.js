module.exports = function(app) {

    // var auth = function(req, res, next){
    //     if (req.session && req.session.user === "amy" && req.session.admin)
    //         return next();
    //     else
    //         return res.sendStatus(401);
    // };

    app.post('/login', function (req, res) {

        console.log('incoming body ', req.body);

        if(req.body.email === "Wormley5@aol.com" && req.body.password === "123hiphop") {
            req.session.user = "Wormley5@aol.com";
            req.session.admin = true;
            console.log('login sussess')
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

    app.get('/content', function(req, res) {
        res.send("I've logged in succesfully!!")
    });

};

