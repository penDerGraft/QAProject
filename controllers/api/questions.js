var router = require('express').Router()
var Question = require('../../models/question')
var Answer = require('../../models/answer')

router.get('/', function (req, res, next) {
  Question.find()
  .sort('-date')
  .exec(function (err, questions) {
    if (err) { return next(err) }
    res.json(questions)
  })
})

router.get('/:id', function (req, res, next) {
  Question.findById(req.params.id, function (err, question) {
    if (err) { return next(err) }
    res.json(question)
  })
})

router.post('/', function (req, res, next) {
  var post = new Question({ title: req.body.title, body: req.body.body })
  post.username = req.auth.username
  post.save(function (err, question) {
    if (err) { return next(err) }
    res.status(201).json(question)
  })
})


router.post('/:id', function (req, res, next) {
  var answer = new Answer({ body: req.body.body, votes: 0 })
  answer.username = req.auth.username

  answer.save(function (err, answer) {
    if (err) { return next(err) }

    Question.findById(req.params.id, function (err, question) {
      if (err) { return next(err) }
      console.log(question.body + " " + answer.body)
      question.answers.push(answer)
      
      question.save(function (err, question) {
        if (err) { return next(err) }
        console.log(question.answers)
        res.status(201).json(answer)
      })
      
      // res.status(201).json(answer)
    })

  })
})

module.exports = router


