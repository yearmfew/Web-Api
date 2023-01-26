const mongoose = require("mongoose")
const { UserModel } = require("./user")

// Does not work. Still saves in users. How to save it to student collection?
const Options = {
    discriminatorKey: "teacher",
    collection: "teachers",
    timestamps: true,
}


const TeacherSchema = new mongoose.Schema({
    course: String
},
    Options
)


const TeacherSignUp = UserModel.discriminator("teacher", TeacherSchema);

module.exports = { TeacherSignUp }