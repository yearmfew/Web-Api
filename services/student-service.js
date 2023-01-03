const { StudentSignUp } = require("../models/student")
const BaseService = require("./base-service")

class StudentService extends BaseService {

}

module.exports = new StudentService(StudentSignUp)