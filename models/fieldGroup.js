const mongoose = require("mongoose")

const FieldGroupSchema = new mongoose.Schema({
    title: String,
    description: String,
    Fields: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "FieldModel",
        autopopulate: { maxDepth: 2 }
    }]

},
    { collection: "field-groups" }
)
FieldGroupSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("FieldGroupModel", FieldGroupSchema)