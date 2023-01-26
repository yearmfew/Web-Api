const mongoose = require("mongoose")

const FieldSchema = new mongoose.Schema({
    title: String,
    description: String,
    checklist: String,
    GuidingQuestions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "GuidingQuestionModel",
        autopopulate: { maxDepth: 2 }
    }],
    ExplanationVideos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ExplanationVideoModel",
        autopopulate: { maxDepth: 2 }
    }],
    FieldExamples: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "FieldExampleModel",
        autopopulate: { maxDepth: 2 }
    }],
    Attachments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "AttachmentModel",
        autopopulate: { maxDepth: 2 }
    }],
    SupportMethods: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SupportMethodModel",
        autopopulate: { maxDepth: 2 }
    }],
    SubFields: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "FieldModel",
        autopopulate: { maxDepth: 2 }
    }]

},
    { collection: "fields" }
)
FieldSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("FieldModel", FieldSchema)