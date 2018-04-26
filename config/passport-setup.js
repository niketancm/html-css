const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-models');

passport.use(
    new GoogleStrategy({
        //options for google like cliednID and clientSecret and redirect
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, 
        //passport callback where we are going to save new users
        (accessToken, refreshToken, profile, done) => {
        //check if the user is already in the database
        User.findOne({googleId: profile.id}).then((currentUser) =>{
            if(currentUser){
                //user already present
            }else{
                //create the user, if he is new
                new User({
                    username: profile.displayName,
                    googleId: profile.id
                }).save().then((newUser) => {
                    console.log('new user created:' + newUser)
                });
            }
        });
    })
)

        