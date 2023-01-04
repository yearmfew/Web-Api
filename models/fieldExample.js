const mongoose = require("mongoose")

const FieldExampleSchema = new mongoose.Schema({
    name: String,
    description: String,
    Visualisation: String // Image
},
    { collection: "field-example" }

)

FieldExampleSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("FieldExampleModel", FieldExampleSchema)
