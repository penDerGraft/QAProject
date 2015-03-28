var router = require('express').Router()
var Question = require('../../models/question')

router.get('/', function (req, res, next) {
  Question.find()
  .sort('-date')
  .exec(function (err, questions) {
    if (err) { return next(err) }
    res.json(questions)
  })
})

router.post('/', function (req, res, next) {
  var post = new Question({ title: req.body.title, body: req.body.body })
  post.username = req.auth.username
  post.save(function (err, post) {
    if (err) { return next(err) }
    res.status(201).json(post)
  })
})

module.exports = router