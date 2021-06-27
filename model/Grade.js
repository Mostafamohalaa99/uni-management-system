const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gradesSchema = new Schema({
    course: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('grades', gradesSchema);