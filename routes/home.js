const express = require("express");
const router = express.Router();

router.get("/v1/currentstate/barrier/:barrierId", (req, resp) => {
  // #swagger.tags = ['Barrier Controller']
  // #swagger.path = '/v1/currentstate/barrier/{barrierId}'
  // #swagger.description = 'Get barrier gate open/closed/online status'
  resp.send({ barrierId: req.params.barrierId, alive: true, state: "Closed" });
});

router.post("/v1/modifystate/barrier", (req, resp) => {
  // #swagger.tags = ['Barrier Controller']
  // #swagger.path = '/v1/modifystate/barrier'
  // #swagger.description = 'Update barrier gate to open/closed status'
  /*  #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Schema for barrier control',
        schema: {
          "$premiseId": "Default",
          "$barrierId": "",
          "$state": "Open"
        }
    } */
  resp.send({ barrierId: req.params.barrierId, alive: true, state: "Closed" });
});

module.exports = router;
