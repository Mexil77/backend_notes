const { Schema, model } = require("mongoose");

const NoteSchema = new Schema(
	{
		userId: Number,
		title: String,
		body: String,
	},
	{
		timestamps: true,
	}
);

module.exports = model("Note", NoteSchema);
