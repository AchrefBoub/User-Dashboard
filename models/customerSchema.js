const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the schema (the structure of the article)

const userSchema = new Schema({
    firstNameee: String,
    lastNameee: String,
    email: String,
    phoneNumber: String,
    age: String,
    country: String,
    gender: String,
}, { timestamps: true });


// Create a model based on that schema
const User = mongoose.model("customer", userSchema);


// export the model
module.exports = User