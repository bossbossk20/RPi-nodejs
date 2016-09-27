/*global $, angular*/
angular.module('snapshotApp', [])
  .controller('snapCtrl', function($http,$scope) {

    $scope.click = function() {
      if ($scope.value===true) {
        console.log("Snapshot!")
          $http.get('/click').success(function(response) {
              $scope.data = response
            }).
            error(function(data, status, headers, config) {
              console.log('error')
            })
      }
      else { 
	console.log("Not Snap")
	}
    }


  });
