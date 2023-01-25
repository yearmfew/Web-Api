const { TeacherService } = require('../services')
const { TeacherModel } = require("../models/student")

const BaseRouter = require('./base-router')
const UserDescriptor = require("../validation/user-validation")

class TeacherRouter extends BaseRouter {

}

module.exports = new TeacherRouter(TeacherModel, TeacherService, UserDescriptor).router











