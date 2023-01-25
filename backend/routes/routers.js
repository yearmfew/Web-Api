const UserRouter = require("./user-router")
const StudentRouter = require("./student-router")
const TeacherRouter = require("./teacher-router")
const RoleRouter = require("./role-router")
const ResearchStrategyRouter = require("./researchStrategy-router")
const ResearchDesignRouter = require("./researchDesign-router")
const ResearchMethodsAndTechniquesRouter = require("./researchMethodsAndTechniques-router")
const CourseRouter = require("./course-router")
const AttachmentRouter = require("./attachment-router")
const SupportMethodRouter = require("./supportMethod-router")
const ExplanationVideoRouter = require("./explanationVideo-router")
const FieldExampleRouter = require("./fieldExample-router")
const GuidingQuestionRouter = require("./guidingQuestion-router")
const FieldRouter = require("./field-router")
const FieldGroupRouter = require("./fieldGroup-router")
const AuthRouter = require("./auth-router")

module.exports = app => {
    app.use("/user", UserRouter)
    app.use("/student", StudentRouter)
    app.use("/teacher", TeacherRouter)
    app.use("/role", RoleRouter)
    app.use("/researchStrategy", ResearchStrategyRouter)
    app.use("/researchDesign", ResearchDesignRouter)
    app.use("/researchMethodsAndTechniques", ResearchMethodsAndTechniquesRouter)
    app.use("/course", CourseRouter)
    app.use("/attachment", AttachmentRouter)
    app.use("/supportMethod", SupportMethodRouter)
    app.use("/explanationVideo", ExplanationVideoRouter)
    app.use("/fieldExample", FieldExampleRouter)
    app.use("/guidingQuestion", GuidingQuestionRouter)
    app.use("/field", FieldRouter)
    app.use("/fieldGroup", FieldGroupRouter)
    app.use("/auth", AuthRouter)
}