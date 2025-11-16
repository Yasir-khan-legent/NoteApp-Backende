
import User from "../Models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

async function Login(req,res) {
  const {email,password} = req.body
  const user = await User.findOne({email})

  if(!user){
    return res.json('Invalid Email and Password')
  }
  const match = await bcrypt.compare(password,user.password)
  if(!match ){
    return res.json('Invalid Email Or Password')
  }

const payload = {
  id:user._id,
    email: user.email,
}
const token =  jwt.sign(payload,process.env.SECRET_STRING,{
   expiresIn: "2h"
})
res.cookie('token',token,{
       secure: false,
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 30
})

   res.json({message:"login sucssesfull"})
}


export default Login;