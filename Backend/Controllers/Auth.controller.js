async function login(req, res) {
    const { email, password } = req.body
    try {
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
        res.cookie('token', token, {
            secure: false,
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 30
        })
        res.status(200).json({ message: "login sucssesfull" })
    } catch (err) {
        console.error('An error occur:', err.message);
        return res
            .status(500)
            .json({ message: 'Internal server error.', status: 500 })

    }
}
async function signup(req, res) {
    const { name, email, password } = req.body
    try {
        const hashpasword = await bcrypt.hash(password, 10)
        const usercreate = await User.create({
            name,
            email,
            password: hashpasword,
        })

        res.status(201).json(usercreate)
    } catch (error) {
        console.log('User Not CReated ', error)
        return res
            .status(500)
            .json({ message: 'Internal server error.', status: 500 })
    }

}
async function logout(req, res) {
    res.clearCookie('token')
    res
        .status(200)
        .json({
            message: "Token Deleted Sucssesfully"
        })
}
export {login,signup,logout}