const   express = require('express'),
        mongoose = require('mongoose'),
        ejs = require('ejs');

const app = express();

const homeRoutes = require('./routes/homeRoute');


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


mongoose.connect('mongodb+srv://admin:Ac123321.@smartedu.5z8mx.mongodb.net/agency')
        .then( console.log('mongoDB Serverina bağlandı'))
        .catch(err => console.log(`hata ! : \n ${err}`));


app.use(homeRoutes);


const port = process.env.PORT || 3000
app.listen(port, () => console.log('server started on ', port));

