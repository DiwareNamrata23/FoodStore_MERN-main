const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const mongouri = process.env.MONGO_URL;
//added database name in url

const mongoDB = async () => {
    try {
        await mongoose.connect(mongouri);
        console.log("Connected to MongoDB");
        const foodItem = mongoose.connection.db.collection("food_item");
        const foodData = await foodItem.find({}).toArray();
        // console.log(data);
        const foodCategory = await mongoose.connection.db.collection("foodCategory")
        const catData = await foodCategory.find({}).toArray();

        global.food_items = foodData;
        global.foodCategory = catData;

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
} 

module.exports = mongoDB;
