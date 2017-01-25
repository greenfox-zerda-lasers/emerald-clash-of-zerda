angular.module("ClashApp").controller("BuildingsController", ['$scope', '$http', '$location', '$route', '$localStorage', 'BuildingsService', function($scope, $http, $location, $route, $localStorage, BuildingsService){

    console.log("lefut?");
    var getBuildings = (function() {

      $scope.buildingsList = BuildingsService.query();
      console.log($scope.buildingsList);

    })();

    
}]);
