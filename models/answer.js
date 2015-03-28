
var db = require('../db')

var Answer = db.model('Answer', {
	username: { type: String, required: true },
	body: { type: String, required: true },
	date: { type: Date, required: true, default: Date.now },
	votes: Number
})

module.exports = Answer

