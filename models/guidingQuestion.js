const mongoose = require("mongoose")

const GuidingQuestionSchema = new mongoose.Schema({
    Question: String
},
    { collection: "guiding-question" }
)

GuidingQuestionSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("GuidingQuestionModel", GuidingQuestionSchema)