angular.module("ClashApp").controller("LoginController", ['$scope', '$http', '$location', '$route', '$localStorage', 'LoginFactory', function($scope, $http, $location, $route, $localStorage, LoginFactory){

  var checkUserObj = (function () {
    if($localStorage.userObj == undefined) {
      $localStorage.userObj = {}
    };
    $localStorage.userObj.userId = false;
    console.log("OK");
  })();

  $scope.userLogin = function() {

    $scope.userData = {
      "username": $scope.username,
      "password": $scope.password
    };

    LoginFactory.save($scope.userData)
      .$promise
      .then( function(response) {
        $localStorage.userObj = {
          userId: response.id,
          kingdom: response.kingdom,
          username: response.username,
          points: response.points
        };
        $location.path('/overview');
      })
      .catch( function(error) {
        console.log(error);
        $scope.errorMessage = error.data.errors.username || error.data.errors.password;
        $scope.error = true;
      });
      $scope.username = "";
      $scope.password = "";
  };
}]);
