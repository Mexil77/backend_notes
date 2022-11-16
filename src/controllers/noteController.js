noteCtrl = {};

const Note = require("../models/Note");

noteCtrl.allNotes = async (req, res) => {
	let allNotes = await Note.find();
	res.json(allNotes);
};

module.exports = noteCtrl;
