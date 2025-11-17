import express from 'express'
import jwtmiddleware from '../Middleware/jwt.js';
import Notes from '../Models/Note.js';
import Signup from '../Controllers/signup.js';
import Login from '../Controllers/login.js';
import updatenote from '../Controllers/noteupdate.js';
import Logout from '../Controllers/logout.js';
import { Deleteall, Deleteone } from '../Controllers/Delete.js';
import FetchData from '../Controllers/Fetch.js';
import creatnote from '../Controllers/notcreat.js';


const router = express.Router()


router.get('/note/:id', async (req, res) => {
  const note = await Notes.findById(req.params.id);
  res.json(note);
});


router.put('/Update/:id' ,updatenote)
router.delete('/Delete/:id' , jwtmiddleware,Deleteone)
router.delete('/Delete',jwtmiddleware ,Deleteall)
router.get('/Fetch' ,jwtmiddleware,FetchData)
router.post('/Signup' , Signup)
router.post('/Create' ,jwtmiddleware, creatnote)
router.post('/Login' , Login)
router.get('/logout' , Logout)




export default router;