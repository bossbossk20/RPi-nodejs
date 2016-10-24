/*global $, angular*/
angular.module('snapshotApp', [])
  .controller('snapCtrl', function($http,$scope) {
    $scope.flipStatus = false
    $scope.click = function() {
      if ($scope.value==='snap') {
        console.log("Snapshot!")
          $http.get('/click').success(function(response) {
              $scope.data = response
		console.log(response)
                 setTimeout(function(){
                   window.location = 'index.html'
                  }, 
	         1500)
            }).
            error(function(data, status, headers, config) {
              console.log('error')
            })
      }
      else { 
	console.log("Not Snap")
	}
    }
    $scope.flip = function () {
      if ($scope.flipStatus === false) {
         $scope.flipStatus = true
        console.log($scope.flipStatus)
      } else {
        $scope.flipStatus = false
        console.log($scope.flipStatus)
     }
      console.log('flip')
    }
  });
