const express = require('express')
const app = express()
const port = 5001

const mongoDB = require("./db")
mongoDB(); 

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");//https://food-store-mern.vercel.app
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type,Accept"
    );
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use('/api',require("./Routes/Createuser"))
app.use('/api',require("./Routes/DisplayData"))
app.use('/api',require("./Routes/OrderData"))
app.use('/api',require("./Routes/MyOrderData"))




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})