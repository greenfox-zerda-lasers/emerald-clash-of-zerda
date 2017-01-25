angular.module("ClashApp").controller("BuildingsController", ['$scope', '$http', '$location', '$route', '$localStorage', 'BuildingsService', function($scope, $http, $location, $route, $localStorage, BuildingsService){

    console.log("lefut?");
    $scope.getBuildings = function() {
      console.log("button works");
      $scope.buildingsList = BuildingsService.query();
      console.log($scope.buildingsList);
    };
}]);
