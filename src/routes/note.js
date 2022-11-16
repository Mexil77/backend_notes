const { Router } = require("express");

const router = Router();

const { allNotes } = require("../controllers/noteController");

router.route("/").get(allNotes);

module.exports = router;
