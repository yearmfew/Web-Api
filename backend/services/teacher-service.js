const { TeacherSignUp } = require("../models/teacher")
const BaseService = require("./base-service")

class TeacherService extends BaseService {

}

module.exports = new TeacherService(TeacherSignUp)