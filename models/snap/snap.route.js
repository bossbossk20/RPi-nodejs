;(function () {
  'use strict'
  var express = require('express')
  var PythonShell = require('python-shell')
  var router  = express.Router()

  router.get('/click', function (req, res, next) {
    PythonShell.run('snapshot.py', function (err) {
      if (err) { res.send(err) }
      else res.send({message : 'done'});
    });
  });
  module.exports = router
})()
