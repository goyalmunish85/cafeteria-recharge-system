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
    u_id:{
    	 type: Schema.ObjectId,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    feedback: {
        type: String
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