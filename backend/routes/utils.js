const express = require("express");
const router = express.Router();
const { isAuth } = require("../middlewares/auth");

const { dashboard } = require("../controllers/utils");

router.route("/dashboard").get(isAuth, dashboard);

module.exports = router;
