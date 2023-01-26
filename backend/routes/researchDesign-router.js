const { ResearchDesignService } = require('../services')
const BaseRouter = require('./base-router')
const ResearchDesignModel = require("../models/researchDesign")
// const ResearchDesignDescriptor = require("../validation/researchDesign-validation")

class ResearchDesignRouter extends BaseRouter {

}

module.exports = new ResearchDesignRouter(ResearchDesignModel, ResearchDesignService).router