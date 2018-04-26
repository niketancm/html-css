const express = require('express');
const authRoutes = require('./routes/auth-routes');
const app = express();
const passportSetup = require('./config/passport-setup');


app.set('view engine','ejs');
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

