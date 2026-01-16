const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/notesDB");
        console.log("Database Connected Successfully");
    }
    catch(err) {
        console.log("Database Connection Error: ",err);
        process.exit(1);
    }
}

module.exports = connectDB;