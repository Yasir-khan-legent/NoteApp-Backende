
import User from "../Models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

async function Login(req, res) {
  const { email, password } = req.body
  // const user = await User.findOne({ email })

  // if (!user) {
  //   return res.json('Invalid Email and Password')
  // }
  // const match = await bcrypt.compare(password, user.password)
  // if (!match) {
  //   return res.json('Invalid Email Or Password')
  // }
  const user = {
    _id: '123456',
    email: 'afridi@gmail.com',
  }

  const payload = {
    id: user._id,
    email: user.email,
  }
  const token = jwt.sign(payload, process.env.SECRET_STRING)
res.cookie("token", token, {
  httpOnly: true,
  secure: true, 
  sameSite: "none",
  path: "/"
});

  res.json({ message: "login sucssesfull" })
}


export default Login;