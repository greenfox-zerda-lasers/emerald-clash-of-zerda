angular.module("ClashApp").controller("LoginController", ['$scope', '$http', '$location', '$route', '$localStorage', 'LoginFactory', function($scope, $http, $location, $route, $localStorage, LoginFactory){

  var checkUserObj = (function () {
    if($localStorage.userObj == undefined) {
      $localStorage.userObj = {}
    };
    $localStorage.userObj.token = false;
  })();

  $scope.userLogin = function() {

    $scope.userData = {
      "username": $scope.username,
      "password": $scope.password
    };

    LoginFactory.save($scope.userData)
      .$promise
      .then( function(response) {
        console.log("login", response);
        $localStorage.userObj = {
          userId: response.id,
          kingdom: response.kingdom,
          username: response.username,
          points: response.points,
          token: response.token
        };
        console.log($localStorage.userObj);
        $http.defaults.headers.common['Authorization'] = $localStorage.userObj.token;
        $location.path('/map');
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
