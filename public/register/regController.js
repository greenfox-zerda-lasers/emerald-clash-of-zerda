angular.module("ClashApp").controller("RegController", ['$scope', '$http', '$location', '$localStorage', 'RegistrationFactory', function($scope, $http, $location, $localStorage, RegistrationFactory) {

  var checkUserObj = (function () {
    if($localStorage.userObj == undefined) {
      $localStorage.userObj = {}
    };
    $localStorage.userObj.userId = false;
    console.log("OK");
  })();

  $scope.userRegistration = function() {
    $scope.regData = {
      "username": $scope.username,
      "kingdom": $scope.kingdom,
      "password": $scope.password
    };

    RegistrationFactory.save($scope.regData)
      .$promise
      .then( function (response) {
        $localStorage.userObj = {
          userId: response.id,
          kingdom: response.kingdom,
          username: response.username,
          points: response.points
        };
        $location.path('/overview');
      })
      .catch( function (error) {
        $scope.errorMessage = error.data.errors.username;
        $scope.error = true;
      });
      $scope.username = "";
      $scope.kingdom = "";
      $scope.password = "";
  };
}]);
