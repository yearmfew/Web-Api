const mongoose = require("mongoose")

const ResearchConcepSchema = new mongoose.Schema({
    title: String,
    description: String,
    dateCreated: Date,
    dateLastModified: Date,
    changelog: String, // ??
    attachmentVisibility: Boolean,
    attachment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "AttachmentModel",
        autopopulate: { maxDepth: 2 }
    }],

},
    { collection: "research-concepts" }
)

ResearchConcepSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("ResearchConceptModel", ResearchConcepSchema)
