var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/QAapp12345', function () {
	console.log('mongodb connected')
})
module.exports = mongoose