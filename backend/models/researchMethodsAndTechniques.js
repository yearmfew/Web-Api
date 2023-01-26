const mongoose = require("mongoose")

const ResearchMethodsAndTechniquesSchema = new mongoose.Schema({
    name: String,
    description: String,
    visualisation: String // image later
},
    { collection: "researchMethodsAndTechniqueses" }
)

ResearchMethodsAndTechniquesSchema.plugin(require("mongoose-autopopulate"))

module.exports = mongoose.model("ResearchMethodsAndTechniquesModel", ResearchMethodsAndTechniquesSchema)