const mongoose = require('mongoose')

const Item = mongoose.Schema({
    price: Number,
    inventory: Number,
    nextDelivery: Date,
    deliveryAmt: Number,
    name: String,
})

module.exports = mongoose.model('Items', Item)