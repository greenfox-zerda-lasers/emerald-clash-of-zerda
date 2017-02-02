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
        console.log(response);
        console.log($localStorage.userObj);
      })
      .catch( function (error) {
        console.log(error.data.errors.username);
        $scope.errorMessage = error.data.errors.username;
        $scope.error = true;
      });
      $scope.username = "";
      $scope.kingdom = "";
      $scope.password = "";
  };
}]);
