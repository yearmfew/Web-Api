const mongoose = require("mongoose")

const SupportMethodSchema = new mongoose.Schema({
    title: String,
    description: String,
    goal: String,
    steps: String,
    example: String,
    inputConditions: String,
    Field: String // will be auto populated 
},
    { collection: "support-method" }

)

SupportMethodSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("SupportMethodModel", SupportMethodSchema)
