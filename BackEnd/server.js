const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001
const db = require('./db')
const apiUpdateAnItem = 'http://localhost:3001/update_item'

const { Items } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.send('This is root!')
})

app.get('/api/', async (req, res) => {
    const allItems = await Items.find()
    console.log(`All Items should arrive!`)
    res.json(allItems);
})


app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})


app.post('/api/add-new', async (req, res) => {
    try {
        const items = await new Items(req.body);
        await items.save();
        return res.status(201).json({
          items,
        });
      } catch (error) {
          return res.status(500).json({ error: error.message })
      }
})

app.delete('/api/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Items.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Item deleted')
        }
        throw new Error('User not found!')
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

