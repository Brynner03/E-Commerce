const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001
const db = require('./db')

const { Items } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.send('This is root!')
})

app.get('/api/items', async (req, res) => {
    const allItems = await Items.find()
    console.log(`All Items should arrive!`)
    res.json(allItems);
})

app.get('/api/items/:id', async (req, res) => { 
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) throw Error ("Not a valid MongoDB ObjectID!!!!!!!");

        const thisItem = await Items.findById(id);
        
        if (!thisItem) throw Error ("OH NO! That item was not found.")

        console.log(`specific park should arrive!`)
        res.json(thisItem);
    } catch (e) {
        console.log(e)
        res.send(`There was AN ERROR!!!  ${e.message}`);
    }
})




app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})