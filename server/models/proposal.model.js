const mongoose = require('mongoose')

const proposalSchema = new mongoose.Schema({
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    freelancer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    price: { type: Number, required: true },
    message: { type: String, required: true, trim: true },
    status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" }
}, { timestamps: true })

const proposalModel =  mongoose.model("Proposal", proposalSchema);


module.exports = proposalModel