const express = require("express");
const router = express.Router();

router.use("/", require("./MenuRoutes"));

module.exports = router;
