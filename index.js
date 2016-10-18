var express = require('express')
var snap = require('./models/snap/snap.route.js')
var app = express()

app.use(express.static('public'))
app.use('/', snap)

app.listen(3000)
console.log("running on port 3000")
