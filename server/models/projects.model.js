const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    requiredSkills: [{ type: String, trim: true }],
    budget: { type: Number, required: true, min: 0 },
    status: { type: String, enum: ["open", "in_progress", "completed"], default: "open" },
    client: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    freelancer: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null }
}, { timestamps: true })

const projectModel = mongoose.model("project", projectSchema);

module.exports = projectModel