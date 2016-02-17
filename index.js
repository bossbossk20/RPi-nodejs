var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var login = require('./models/login/login.route.js')

var app = express()

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))









 app.use('/', login)






app.listen(3000)
console.log("running on port 3000")
