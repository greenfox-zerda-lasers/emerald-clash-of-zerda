angular.module("ClashApp").controller("RegController", ['$scope', '$http', '$location', function($scope, $http, $location) {

  $scope.userRegistration = function() {
    $scope.regData = {
      "username": $scope.username,
      "kingdom": $scope.kingdom,
      "password": $scope.password
    };
    console.log($scope.regData);

    $http({
      method: 'POST',
      url: 'http://localhost:8000/register',
      data: $scope.regData,
    }).then(function(response){
      console.log(response, "registration");
    });

    $scope.username = "";
    $scope.kingdom = "";
    $scope.password = "";
  };
}]);
