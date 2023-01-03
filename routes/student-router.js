const { StudentService } = require('../services')
const { StudentSchema } = require("../models/student")

const BaseRouter = require('./base-router')
const UserDescriptor = require("../validation/user-validation")


const express = require('express')

class StudentRouter extends BaseRouter {

    // constructor() {
    //     this.router = express.Router()

    //     this.router.post("/createStudent", async (req, res) => {
    //         console.log(req.body)
    //         const result = StudentService.createStudent(req.body)
    //     })
    // }

}

module.exports = new StudentRouter(StudentSchema, StudentService, UserDescriptor).router











