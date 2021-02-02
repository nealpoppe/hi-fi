const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.records.index); // index
router.get("/new", ctrl.records.renderNew); // renderNew
router.post("/", ctrl.records.postRecord); // postRecord
router.get("/:id", ctrl.records.show); // show
router.get("/:id/edit", ctrl.records.renderEdit); // renderEdit
router.put("/:id", ctrl.records.editRecord); // editRecord
router.delete("/:id", ctrl.records.deleteRecord);

module.exports = router;