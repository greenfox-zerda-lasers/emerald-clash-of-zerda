angular.module("ClashApp").controller("BuildingsController", ['$scope', '$http', '$location', '$route', '$localStorage', 'BuildingsService', function($scope, $http, $location, $route, $localStorage, BuildingsService){

    console.log("lefut?");
    $scope.getBuildings = function() {
      console.log("button works");
      $scope.buildings = BuildingsService.query();
      console.log($scope.buildings);
    };
}]);
