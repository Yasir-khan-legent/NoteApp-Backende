import express from 'express'
import { login, logout, signup } from '../Controllers/Auth.controller.js'
const router = express.Router()

router.post('/login', login)
router.post('/signup', signup)
router.get('/logout', logout)

export default router;