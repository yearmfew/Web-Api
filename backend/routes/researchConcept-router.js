const { ResearchConceptService } = require('../services')
const BaseRouter = require('./base-router')
const ResearchConceptModel = require("../models/researchConcept")

class ResearchConceptRouter extends BaseRouter {

}

module.exports = new ResearchConceptRouter(ResearchConceptModel, ResearchConceptService).router