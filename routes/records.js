const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.records.index); // index
router.get("/new", ctrl.records.renderNew); // renderNew
router.get("/:id", ctrl.records.show); // show

module.exports = router;