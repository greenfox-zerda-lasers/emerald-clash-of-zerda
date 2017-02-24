angular.module("ClashApp").controller("WelcomeController", ['$scope', '$http', '$localStorage', '$location', '$resource', function($scope, $http, $localStorage, $location, $resource) {
  console.log("welcome from ctrl");

  $scope.goToGame = function () {
    console.log("map");
    $location.path('/map');
  };

}]);
