
var db = require('../db')
var Answer = require('./answer')

var Question = db.model('Question', {
	username: { type: String, required: true },
	title: { type: String, required: true },
	body: { type: String, required: true },
	date: { type: Date, required: true, default: Date.now },
	answers: [ Answer.schema ]
})

module.exports = Question