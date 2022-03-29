const { model } = require('mongoose')
const mongoose = require('mongoose')
const ItemSchema = require('./items')

const Items = mongoose.model('items', ItemSchema)

module.exports = {
    Items
}