const mongoose = require("mongoose")
const { UserModel } = require("./user")

// Does not work. Still saves in users. How to save it to student collection?
const Options = {
    discriminatorKey: "student",
    collection: "students",
    timestamps: true,
}


const StudentSchema = new mongoose.Schema({
    course: String
},
    Options
)


const StudentSignUp = UserModel.discriminator("student", StudentSchema);

module.exports = { StudentSignUp }