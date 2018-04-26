const router = require('express').Router();
const passport = require('passport')

//login auth
router.get('/login', (req,res) =>{
    res.render('login', { user: req.user });
});

//auth with google+
router.get('/google', passport.authenticate('google',{
    scope:['profile']
}));

//logout
router.get('/logout', (req,res) =>{
    //to be handled with passport
    res.send('logging out...');
});

//auth/google/redirect
router.get('/google/redirect', (req,res) => {
    res.send('You reached call-back URL');
});

module.exports = router;

// passport.authenticate('google')