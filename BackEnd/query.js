const db = require('./db')
const { Items } = require('./models')

const findAllItems = async () => {
    const items = await Items.find()
    console.log( 'Items: ', items)
}


const run = async () => {
    try {

    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}