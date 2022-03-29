const db = require('./db')
const { Items } = require('./models')

const findAllItems = async () => {
    const parks = await Items.find()
    console.log( 'Parks: ', parks)
}


const run = async () => {
    try {

    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}