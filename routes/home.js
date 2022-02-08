const express = require("express");
const router = express.Router();

router.get("/v1/control/barrier", (req, resp) => {
  // #swagger.tags = ['Barrier Controller']
  // #swagger.path = '/v1/control/barrier'
  // #swagger.description = 'Controls barrier gate'
  resp.send({ status: "good" });
});

module.exports = router;
