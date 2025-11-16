import dotenv from 'dotenv'
dotenv.config()


import mongoose from 'mongoose'

async function Conection() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Database Conected SucssesFully 👍')
    } catch (error) {
        console.log('Database Error',error.message)
        process.exit(1)
    }
}

export default Conection;