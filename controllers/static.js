var express = require('express')
var router = require('express').Router() 

router.use(express.static(__dirname + '/../assets'))
router.use(express.static(__dirname + '/../templates'))

router.get('/', function (req, res) {
	res.render('index.html.ejs')
})

module.exports = router