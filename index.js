const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const path = require('path')
const authRoutes = require('./routes/user');
// app.set('views', path.join(__dirname, 'views'));

// app.listen(8080)
app.use(function(req, res, next) {
    console.log('first')
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.json());
app.use(authRoutes);

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const MONGODB_URI = 'mongodb+srv://admin:admin@cluster0.4965m.mongodb.net/uni-system?retryWrites=true&w=majority'
mongoose
    .connect(MONGODB_URI, options)
    .then(result => {
        app.listen(8080);
    })
    .catch(err => {
        console.log(err);
    });
