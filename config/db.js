const mongodb = require("mongoose");

const connectDB = async () =>{
    try {
        await mongodb.connect(process.env.MongoDB_URL)
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;