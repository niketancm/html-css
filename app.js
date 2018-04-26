const express = require('express');
const authRoutes = require('./routes/auth-routes');

const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

app.set('view engine','ejs');
//to set css files
app.use(express.static(__dirname + '/public'));

//home route
app.get('/',(req, res) =>{
    res.render('home');
});

//seting up routes
app.use('/auth',authRoutes);

app.listen(3000, ()=>{
    console.log('app now listening to 3000 port');
});

//mongodb connection
mongoose.connect(keys.mongodb.dbURI, () =>{
    console.log('connected to mongodb');
});