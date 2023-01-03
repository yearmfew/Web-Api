const mongoose = require("mongoose")

const ResearchConcept = new mongoose.Schema({
    title: String,
    description: String,
    dateCreated: Date,
    dateLastModified: Date,
    changelog: String, // ??
    attachmentVisibility: Boolean

},
    { collection: "research-concepts" }
)

ResearchConcept.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("ResearchConceptModel", ResearchConcept)
