const { AttachmentService } = require('../services')
const BaseRouter = require('./base-router')
const AttachmentModel = require("../models/attachment")

class AttachmentRouter extends BaseRouter {

}

module.exports = new AttachmentRouter(AttachmentModel, AttachmentService).router