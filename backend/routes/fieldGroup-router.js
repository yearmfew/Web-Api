const { FieldGroupService } = require('../services')
const BaseRouter = require('./base-router')
const FieldGroupModel = require("../models/fieldGroup")

class FieldGroupRouter extends BaseRouter {

}

module.exports = new FieldGroupRouter(FieldGroupModel, FieldGroupService).router