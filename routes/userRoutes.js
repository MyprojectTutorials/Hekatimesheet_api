const express = require('express');
const userSchema = require('../models/userModels');
const router = express.Router();
//get
router.get('/',(req,res)=>{
    res.send('Get Method....!')
})
//fetching
router.get('/getAllData',async(req,res)=>{
    try{
        const data = await userSchema.find();
        res.send(data);
    }
    catch(error){
        res.send(error)
    }
})

//posting
router.post('/addData',async(req,res)=>{
    const data = new userSchema(req.body);
    const val=data.save();
    console.log(val)
    res.send(val)
})
//updating
router.put('/update/:id',async(req,res)=>{
try{
    let uId = req.params.id;
    let updatedData = req.body;
    let updatedUser = await userSchema.findByIdAndUpdate(uId,updatedData,{new:true});
    res.send(updatedData)
}
catch(error){
    res.send(error)
}
})
//find one and Delete
router.delete('/delete/:id',async(req,res)=>{
const uid=req.params.id
console.log(uid)
   const deletedSchema =await userSchema.deleteOne({ _id: uid })
   console.log('data deleted...!')
      res.send(deletedSchema)
})
module.exports = router