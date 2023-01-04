const { FieldExampleService } = require('../services')
const BaseRouter = require('./base-router')
const FieldExampleModel = require("../models/fieldExample")

class FieldExampleRouter extends BaseRouter {

}

module.exports = new FieldExampleRouter(FieldExampleModel, FieldExampleService).router