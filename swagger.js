const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./routes/*"];

const doc = {
  info: {
    version: "1.0.0",
    title: "Vajra Access Control System API",
    description: "Vajra Access Control System API Documentation",
  },
  host: "localhost:443",
  basePath: "/",
  schemes: ["https"],
  consumes: ["application/json"],
  produces: ["application/json"],
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./index.js");
});
