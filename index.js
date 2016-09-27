var express = require('express')
var led = require('./models/snap/snap.route.js')
var app = express()

app.use(express.static('public'))
app.use('/', led)

app.listen(3000)
console.log("running on port 3000")
