const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
    new GoogleStrategy({
        //options for google like cliednID and clientSecret and redirect
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, () => {
        
    })
);

// accessToken, refreshToken, profile, done

        //passport callback
        // console.log('callback function fired');
        // console.log(profile);