const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.records.index); // index
router.get("/:id", ctrl.records.show); // show

module.exports = router;