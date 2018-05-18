const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var orderPizzaSchema = new Schema({
   p_id: {
        type: Schema.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    orderdescription:{
        type: String,
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
    pizzas: [orderPizzaSchema]
},{
    timestamps: true
});

var Order = mongoose.model('Order', orderSchema);

module.exports = Order;