// import mongoose to build the model
const mongoose = require("mongoose")

// The model - the rules the entries need to follow
const StoreSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must contain 3 characters!"],
    },
    number: {
        type: Number,
        trim: true,
        required: [true, "{PATH} is required"],
        min: [0, "{PATH} must be a number greater than 0!"],
    },
    open: {
        type: Boolean,
        default: false,
    }
},
    { timestamps: true });

module.exports = mongoose.model ("Store", StoreSchema);