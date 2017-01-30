angular.module("ClashApp").controller("BuildingsController", ['$scope', '$http', '$location', '$route', '$localStorage', 'BuildingsService', function($scope, $http, $location, $route, $localStorage, BuildingsService){

    var getBuildings = (function() {
      $scope.buildingsList = BuildingsService.query();
      console.log($scope.buildingsList);
    })();

    $scope.addNewBuilding = function () {
      
      console.log("new building added");
    };



    // $scope.upgradeBuilding = function () {
    //   console.log("upgrade + ");
    // };

}]);
