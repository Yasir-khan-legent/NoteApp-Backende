import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

const userschema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password: {
        type:String,
        required:true
    }
})
const User = mongoose.model('User',userschema)

export default User;