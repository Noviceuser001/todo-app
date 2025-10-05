const mongoose = require("mongoose");

const connectMongodb = async () => {
    // Allow using either CONNECTION_URL or MONGODB_URL env vars, with a safe local fallback.
    const uri =
        process.env.CONNECTION_URL || process.env.MONGODB_URL || "mongodb://localhost:27017/todoapp";

    if (!uri || typeof uri !== "string") {
        console.error(
            "MongoDB connection string is missing or invalid. Set CONNECTION_URL in your .env file, e.g. CONNECTION_URL=mongodb://localhost:27017/todoapp"
        );
        process.exit(1);
    }

    try {
        await mongoose.connect(uri, {
            // use the newer topology and parser options by default
            // (Mongoose 6+ ignores these but passing an options object is harmless)
        });
        console.log("Database Connection Successful");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
        process.exit(1);
    }
};

module.exports = connectMongodb;