const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var cartSchema = new Schema({
    u_id: {
        type: Schema.ObjectId,
        required: true
    },
    i_id: {
        type: Schema.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
},{
    timestamps: true
});

var Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;