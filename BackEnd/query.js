const db = require('./db')
const { Items } = require('./models')

const findAllItems = async () => {
    const Items = await Items.find()
    console.log( 'Items: ', Items)
}


const run = async () => {
    try {

    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}