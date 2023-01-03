const UserRouter = require("./user-router")
const StudentRouter = require("./student-router")
const TeacherRouter = require("./teacher-router")
const RoleRouter = require("./role-router")
const ResearchStrategyRouter = require("./researchStrategy-router")
const ResearchDesignRouter = require("./researchDesign-router")
const ResearchMethodsAndTechniquesRouter = require("./researchMethodsAndTechniques-router")
const CourseRouter = require("./course-router")

module.exports = app => {
    app.use("/user", UserRouter)
    app.use("/student", StudentRouter)
    app.use("/teacher", TeacherRouter)
    app.use("/role", RoleRouter)
    app.use("/researchStrategy", ResearchStrategyRouter)
    app.use("/researchDesign", ResearchDesignRouter)
    app.use("/researchMethodsAndTechniques", ResearchMethodsAndTechniquesRouter)
    app.use("/course", CourseRouter)
}