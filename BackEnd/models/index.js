const { model } = require('mongoose')
const ItemSchema = require('./items')

const Items = model('items', ItemSchema)

module.exports = {
    Items
}