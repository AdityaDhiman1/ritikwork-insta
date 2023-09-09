import express from "express";
const approuter = express.Router();
import Signup from '../models/signupshcema.js'
approuter.get('/getusers', async(req,res) => {
    try {
        let userdata = await Signup.find({});
        res.status(200).json(userdata)
        
    } catch (error) {
     res.status(404).json(error.message)   
    }
    
})



export default  approuter;