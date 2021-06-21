const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const path = require('path')
const authRoutes = require('./routes/user');
// app.set('views', path.join(__dirname, 'views'));

// app.listen(8080)

app.use(bodyParser.json());
app.use(authRoutes);

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const MONGODB_URI = 'mongodb+srv://Abdelrahman:admin@cluster0.2lppv.mongodb.net/uni-system?retryWrites=true&w=majority'
mongoose
    .connect(MONGODB_URI, options)
    .then(result => {
        app.listen(8080);
    })
    .catch(err => {
        console.log(err);
    });
// const user = new User({
//     email: "omar@roshdy.com",
//     password: "12345",
//     role: "student"
// }, {
//     email: "layla@salem.net",
//     password: "12345",
//     role: "TA"
// }, {
//     email: "ahmed@ezz.net",
//     password: "12345",
//     role: "Admin"
// });
// user.save();