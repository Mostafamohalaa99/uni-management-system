const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    TA: {
        type: String,
        required: false
    },
    difficulty: {
        type: String,
        required: false
    },
    semester: {
        type: String,
        required: false
    },
    time: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('courses', courseSchema);