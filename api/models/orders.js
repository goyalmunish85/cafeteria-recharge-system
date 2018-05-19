const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var orderItemSchema = new Schema({
   i_id: {
        type: Schema.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});
var orderSchema = new Schema({
    u_id: {
        type: Schema.ObjectId,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    bill:{
        type: Currency,
        required: true,
        min: 0
    },
    items: [orderItemSchema]
},{
    timestamps: true
});

var Order = mongoose.model('Order', orderSchema);

module.exports = Order;