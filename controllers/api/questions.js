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


// router.post('/:id', function (req, res, next) {
//   var answer = new Answer({ body: req.body.body, votes: 0 })
//   answer.username = req.auth.username

//   answer.save(function (err, answer) {
//     if (err) { return next(err) }
//     // res.status(201).json(answer)
//     Question.findById(req.params.id, function (err, question) {
//       if (err) { return next(err) }
//       console.log(question.body + " " + answer.body)
//       question.answers.push(answer)
      
//       question.save(function (err, question) {
//         if (err) { return next(err) }
//         console.log(question.answers)
//         res.status(201).json(answer)
//       })
      
//       res.status(201).json(answer)
//     })

//   })
// })

router.put('/:id', function(req, res, next) {
 
    // Make sure the student ID was sent
    var QuestionID = req.body._id
    if (QuestionID === undefined) {
        res.status(400).json({ message: 'Question ID is missing' })
        return next()
    }
 
    // Update the student with values from the request
    Question.findByIdAndUpdate(QuestionID, req.body, function(err, Question) {
        if (err) return next(err);
        if (Question === null)
            res.status(404).json({ message: 'Question not found' })
        else
            res.status(200).json(Question)
    })
})


router.delete('/:questID/:ansID', function(req, res, next) {
 
    // Make sure the student ID was sent
    // var QuestionID = req.body._id
    // if (QuestionID === undefined) {
    //     res.status(400).json({ message: 'Question ID is missing' })
    //     return next()
    // }
 
    // Update the student with values from the request
      
  Question.findById(req.params.questID, function (err, question) {
      if (err) { return next(err) }
      //console.log(question.body + " " + question.answer.body)
      //console.log(req.params.ansID)
      console.log(req.params.ansID)
      question.answers = question.answers.filter(function (item) {        
        return item._id != req.params.ansID        
      })
      question.save(function (err, question) {
        if (err) { return next(err) }
        console.log(question.answers)
        res.status(201).json(question.answers)
      })
    })
      // function(err, answer) {
      //   if (err) return next(err);
      //   if (Answer === null) {
      //       res.status(404).json({ message: 'Answer not found' });
      //       console.log("not found")
      //     }
      //   else
  res.status(200)
    //})
})

module.exports = router


