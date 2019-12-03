const express = require("express");
const router = express.Router();
const cont_tuit = require('../controllers/controllerTuit');

router.get("/",cont_tuit.get);
router.post("/", cont_tuit.insert);
router.get("/:id",cont_tuit.getOne);

module.exports = router;
