const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.users.index);
router.get("/signup", ctrl.users.renderSignup);
router.post("/signup", ctrl.users.signup);
router.get("/login", ctrl.users.renderLogin);
router.post("/login", ctrl.users.login);
router.get("/profile/:id", ctrl.users.renderProfile);

module.exports = router;