const mongoose = require("mongoose")

const ExplanationVideoSchema = new mongoose.Schema({
    video: String
},
    { collection: "explanationVideo" }

)

ExplanationVideoSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("ExplanationVideoModel", ExplanationVideoSchema)
