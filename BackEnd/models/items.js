const { Schema } = require('mongoose')


const Items = new Schema (
    {
        name: { type: String, required: true },
        price: { type: String, required: true },
        description: { type: String, required: true },
        img: { type: String, required: true },
        department: { type: String, required: true}
    },
    {timestamps: true}
)

module.exports = Items