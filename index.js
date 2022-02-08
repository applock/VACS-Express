require("dotenv").config();
const express = require("express");
const ipfilter = require("express-ipfilter").IpFilter;
const cors = require("cors");
const morgan = require("morgan");
const https = require("https");
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

var options = {
  key: fs.readFileSync("./certs/ssl-key.pem"),
  cert: fs.readFileSync("./certs/ssl-cert.pem"),
};

// Allow the following IPs
const ips = ["127.0.0.1"];

// defining the Express app
const app = express();

// enabling CORS for all requests
app.use(cors());

app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// IP Whitelisting security
app.use(ipfilter(ips, { mode: "allow" }));

// Router and routes
const homeRouter = require("./routes/home");
app.use("/vacs", homeRouter);

// Starting the server
https.createServer(options, app).listen(443, () => {
  console.log("listening on port 443");
});

/*
  app.listen(80, () => {
    console.log("HTTP server running on port 80");
  });
  */

// Swagger endpoint - /doc
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Redirect basepath to Swagger
app.get("/", (req, res) => {
  res.redirect("/doc");
});
