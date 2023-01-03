const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const PORT = process.env.PORT || 3000;

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.3",
        info: {
            title: "Thesis Designer RESTful Api",
            description: "A simple api with nodejs express and swagger.",
            contact: {
                name: "Birol Yilmaz"
            },
            servers: [
                {
                    url: "http://127.0.0.1:{PORT}"
                }
            ]
        }
    },
    apis: ["./swagger/*.js"]
}
const swaggerDocs = swaggerJsDoc(swaggerOptions)

module.exports = app => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}
