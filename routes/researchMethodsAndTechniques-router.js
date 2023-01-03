const { ResearchMethodsAndTechniquesService } = require('../services')
const BaseRouter = require('./base-router')
const ResearchMethodsAndTechniquesModel = require("../models/researchMethodsAndTechniques")
// const ResearchMethodsAndTechniquesDescriptor = require("../validation/researchMethodsAndTechniques-validation")

class ResearchMethodsAndTechniquesRouter extends BaseRouter {

}

module.exports = new ResearchMethodsAndTechniquesRouter(ResearchMethodsAndTechniquesModel, ResearchMethodsAndTechniquesService).router