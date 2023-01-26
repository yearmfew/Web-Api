const cors = require("cors")
// define allowed urls to make request from this api. 
const whitelist = ['http://localhost:8082', 'http://localhost:8080', "http://localhost:8081"]
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

module.exports = app => {
    app.use(cors(corsOptions))
    app.get("/", cors(corsOptions), (req, res) => {
        res.send(`Welcome to Thesis Designer. The Front End will be added. Link for the api: http://127.0.0.1:${PORT}/api-docs/`)
    })
}