const { GuidingQuestionService } = require('../services')
const BaseRouter = require('./base-router')
const GuidingQuestionModel = require("../models/guidingQuestion")

class GuidingQuestionRouter extends BaseRouter {

}

module.exports = new GuidingQuestionRouter(GuidingQuestionModel, GuidingQuestionService).router