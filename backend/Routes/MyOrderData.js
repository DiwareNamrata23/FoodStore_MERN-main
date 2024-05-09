const express = require('express');
const router = express.Router(); 
const Order = require('../models/Orders');

router.post('/myorderData', async(req,res)=>{
    try{
        let myData = await Order.findOne({'email':req.body.email})
        res.json({orderData:myData})
    } catch(error){
        console.error(error);
        res.status(500).send('Server Error');
    }
})

module.exports = router;