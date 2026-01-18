const mongoose = require("mongoose");

if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI environment variable is not defined')
}

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected Successfully");
    }
    catch(err) {
        console.log("Database Connection Error: ",err);
        process.exit(1);
    }
}

module.exports = connectDB;