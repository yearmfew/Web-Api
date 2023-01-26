const mongoose = require("mongoose")

const ResearchDesignSchema = new mongoose.Schema({
    name: String,
    description: String,
    visualisation: String // image later


},
    { collection: "researchDesigns" }
)

ResearchDesignSchema.plugin(require("mongoose-autopopulate"))

module.exports = mongoose.model("ResearchDesignModel", ResearchDesignSchema)