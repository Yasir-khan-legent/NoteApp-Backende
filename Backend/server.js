import 'dotenv/config'
import express from 'express'
import Connection from './Config/config.js'
import router from './Routes/router.js'
import cookieParser from "cookie-parser";
import cors from 'cors'
// import auth from './Routes/Auth.route.js';
const app = express()
app.use(express.json())
Connection()
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(cookieParser())

app.use('/api/auth', router)


// app.use('/auth',auth)

app.listen(process.env.PORT, () => {
    console.log('SERVER IS RUNNING 👍')
})