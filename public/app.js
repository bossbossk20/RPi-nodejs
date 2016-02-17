angular.module('app', [])
  .controller('TodoListController', function($http) {
    var app = this;
    app.test = "hello"
    console.log(app.value)

    app.click = function() {
      if (app.value===true) {
        console.log("true")
          $http.get('/click'). success(function(response) {
              app.d = response
            }).
            error(function(data, status, headers, config) {
              // log error
              console.log('error')
            })

      }
      else console.log("false")
    }


  });
