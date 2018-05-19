const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var feedbackSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fb: {
        type: String
    },
    areaCode:{
        type: Number
    },
    tel:{
        type: Number
    },
    contactBack: {
        type: Boolean,
        default: false
      },
    }, 
    {
        timestamps: true
});

var Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
