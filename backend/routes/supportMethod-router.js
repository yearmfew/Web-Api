const { SupportMethodService } = require('../services')
const BaseRouter = require('./base-router')
const SupportMethodModel = require("../models/supportMethod")

class SupportMethodRouter extends BaseRouter {

}

module.exports = new SupportMethodRouter(SupportMethodModel, SupportMethodService).router