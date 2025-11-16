import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

const userschema = mongoose.Schema({
    title:{
type:String,
    },
 note:{
    type:String,
    required: true,
 },
 status:{
    type:String,
    enum: ['Pending','Completed']
 },
 Createdby:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User'
 }
})
const Notes = mongoose.model('Notes',userschema)

export default Notes;