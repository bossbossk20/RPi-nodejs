;(function () {
  'use strict'
  var express = require('express')
  var PythonShell = require('python-shell')
  var router  = express.Router()




  router.get('/click', function (req, res, next) {
    PythonShell.run('led.py', function (err) {
      if (err) throw err;
      console.log('finished');
    });
    console.log("test");

  });


  module.exports = router
})()
