// const express = require('express');
// const router = express.Router(); 
// const Order = require('../models/Orders')

// router.post('/orderData',async(req,res)=>{
//     let data = req.body.order_data
//     await data.splice(0,0,{order_data: req.body.order_data})

//     //if email not exisiting in db then create: else: Insertmany()
//     let eId = await Order.findOne({'email':req.body.email})
//     console.log(eId);
//     if(eId === null){
//         try{
//             await Order.create({
//                 email: req.body.email,
//                 order_data:[data]
//             }).then(()=>{
//                 res.json({success:true})
//             })
//         } catch(error){
//             console.log(error.message);
//             res.send("Server Error",error.message)
//         }
//     }

//     else{
//         try{
//             await Order.findOneAndUpdate({email:req.body.email},
//                 {
//                     $push:{ order_data:data ,email:email} })
//                     .then(()=>{
//                         res.json({success:true})
//                     })
//         } catch (error){
//             res.send("Server Error",error.message)
//         }
//     }
// })

// module.exports = router


const express = require('express');
const router = express.Router(); 
const Order = require('../models/Orders');

router.post('/orderData', async (req, res) => {
    try {
        const { email, order_data } = req.body;

        // Update or create order
        let existingOrder = await Order.findOne({ email });
        if (!existingOrder) {
            // Create a new order if the email doesn't exist
            await Order.create({
                email,
                order_data: [order_data] // Wrap order_data in an array to match your data structure
            });
        } else {
            // Update existing order by pushing new order data
            existingOrder.order_data.push(order_data);
            await existingOrder.save();
        }

        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
