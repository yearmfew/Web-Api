const { ExplanationVideoService } = require('../services')
const BaseRouter = require('./base-router')
const ExplanationVideoModel = require("../models/explanationVideo")

class ExplanationVideoRouter extends BaseRouter {

}

module.exports = new ExplanationVideoRouter(
    ExplanationVideoModel,
    ExplanationVideoService
).router