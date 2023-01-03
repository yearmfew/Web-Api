const { ResearchStrategyService } = require('../services')
const BaseRouter = require('./base-router')
const ResearchStrategyModel = require("../models/researchStrategy")
// const ResearchStrategyDescriptor = require("../validation/free-validatior")

class ResearchStrategyRouter extends BaseRouter {

}

module.exports = new ResearchStrategyRouter(ResearchStrategyModel, ResearchStrategyService).router