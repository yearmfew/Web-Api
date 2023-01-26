const mongoose = require("mongoose")

const AttachmentSchema = new mongoose.Schema({
    notes: String,
    url: String,
    Type: String
},
    { collection: "attachment" }

)

AttachmentSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("AttachmentModel", AttachmentSchema)
