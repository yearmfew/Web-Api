const { FieldService } = require('../services')
const BaseRouter = require('./base-router')
const FieldModel = require("../models/field")

class FieldRouter extends BaseRouter {

}

module.exports = new FieldRouter(FieldModel, FieldService).router