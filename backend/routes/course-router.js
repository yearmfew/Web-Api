const { CourseService } = require('../services')
const BaseRouter = require('./base-router')
const CourseModel = require("../models/course")

class CourseRouter extends BaseRouter {

}

module.exports = new CourseRouter(CourseModel, CourseService).router