const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const authMiddleware = require('../middleware/authMiddleware');




router.post('/create', authMiddleware, async( req , res)=>{
    try{
        const {  title , desc } = req.body;
        const task = new Task({user:req.user.userId, title , desc });
        await task.save();
        res.status(201).json(task);
    }
    catch(error){
        res.status(500).json({message:"Server Error" ,error: error.message});
    }
});


// router.get('/task' , async(req , res) =>{
//     try{
//         const task = await Task.find();
//         await task.save();
//         res.status(202).json(task);
//     }
//     catch(error){
//         res.status(500).json({error: error.message});
//     }
// });

module.exports = router;