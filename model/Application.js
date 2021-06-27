const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    faculty: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    age: {
        type: String,
        required: false
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('applications', applicationSchema);