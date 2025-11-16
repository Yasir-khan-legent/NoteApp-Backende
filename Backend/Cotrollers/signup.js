import User from "../Models/User.js";
import dotenv from 'dotenv'
dotenv.config()
// import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'






async function Signup(req,res) {
 try {
       const {name,email,password} = req.body
       const hashpasword = await bcrypt.hash(password, 10)
const usercreate = await User.create({
    name,
    email,
    password: hashpasword,
})

res.json(usercreate)
 } catch (error) {
    console.log('User Not CReated ' , error)
 } 
  
}





        

export  default Signup;