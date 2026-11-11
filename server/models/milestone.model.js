const mongoose = require('mongoose')

const milestoneSchema = new mongoose.Schema({
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["pending", "submitted", "approved"], default: "pending" }
}, { timestamps: true })

const milestoneModel = mongoose.model("Milestone", milestoneSchema);

module.exports = milestoneModel