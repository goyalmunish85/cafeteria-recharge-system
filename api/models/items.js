const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var itemSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    itemtype:{
        type: String,
        required: true
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    }, 
    {
        timestamps: true
});

var Items = mongoose.model('Item', itemSchema);

module.exports = Items;