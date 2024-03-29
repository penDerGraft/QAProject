var express    = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())


app.use(require('./auth'))
app.use(require('./controllers/static'))
app.use('/api/questions', require("./controllers/api/questions"))
app.use('/api/users', require("./controllers/api/users"))
app.use('/api/sessions', require("./controllers/api/sessions"))

app.listen(3000, function () {
  console.log('server listening on', 3000)
})