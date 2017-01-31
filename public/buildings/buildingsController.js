angular.module("ClashApp").controller("BuildingsController", ['$scope', '$http', '$location', '$route', '$localStorage', 'BuildingsService', function($scope, $http, $location, $route, $localStorage, BuildingsService){

    var getBuildings = (function() {
      $scope.buildingsList = BuildingsService.query();
      console.log($scope.buildingsList);
    })();

    $scope.setBuildingType = function () {
      console.log('upgrade button clicked');
      

    };

    $scope.addNewBuilding = function () {
      $scope.postData = {
        "user_id": $localStorage.userObj.userId,
        "type": ""
      }
      BuildingsService.save($scope.postData);
      console.log("new building added");

    };

    // $scope.upgradeBuilding = function () {
    //   console.log("upgrade + ");
    // };

}]);
