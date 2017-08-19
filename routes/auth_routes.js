var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {
    app.get('/signup', authController.signup);
    app.get('/', authController.signin);

    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/level-1',

            failureRedirect: '/signup'
        }
    ));

    app.get('/level-1',isLoggedIn, authController.level);

    app.post('signin', passport.authenticate('local-signin', {
        successRedirect: '/level-1',

        failureRedirect: '/signin'
        }
    ));
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}
