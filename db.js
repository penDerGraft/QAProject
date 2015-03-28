var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/QAapp', function () {
	console.log('mongodb connected')
})
module.exports = mongoose