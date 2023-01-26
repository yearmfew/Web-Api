const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    ResearchDesign: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "RoleModel",
        autopopulate: { maxDepth: 2 }
    }],
    ResearchStrategy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "RoleModel",
        autopopulate: { maxDepth: 2 }
    }],
    ResearchMethodsAndTechniques: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "RoleModel",
        autopopulate: { maxDepth: 2 }
    }]

},
    { collection: "courses" }
)
CourseSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("CourseModel", CourseSchema)