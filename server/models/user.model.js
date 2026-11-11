const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true, trim: true},
    lastName: {type: String, required: true, trim: true},
    email: {type: String, required: true, unique: true, lowercase: true, trim: true},
    role: {type: String, enum:["client", "freelancer"], required: true},
    password: {type: String, required: true}
}, {timestamps: true})

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;