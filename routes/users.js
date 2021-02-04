const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.users.index);
router.get("/signup", ctrl.users.renderSignup);
router.post("/signup", ctrl.users.signup);
router.get("/login", ctrl.users.renderLogin);
router.post("/login", ctrl.users.login);
router.get("/profile/:id", ctrl.users.renderProfile);
router.delete('/:id', ctrl.users.deleteUser);
router.put('/profile/:id', ctrl.users.editProfile);
router.delete('/profile/:id', ctrl.users.removeRecord);
router.put('/profile/:id', ctrl.users.addRecord);


module.exports = router;