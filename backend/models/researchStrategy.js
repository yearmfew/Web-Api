const mongoose = require("mongoose")

const ResearchStrategySchema = new mongoose.Schema({
    name: String,
    description: String

},
    { collection: "researchStrategy" }
)

ResearchStrategySchema.plugin(require("mongoose-autopopulate"))

module.exports = mongoose.model("ResearchStrategyModel", ResearchStrategySchema)