angular.module("ClashApp").controller("BuildingsController", ['$scope', '$http', '$location', '$route', '$localStorage', 'BuildingsService', function($scope, $http, $location, $route, $localStorage, BuildingsService){

    var getBuildings = (function() {
      $scope.buildingsList = BuildingsService.query();
      console.log($scope.buildingsList);
    })();

    $scope.addNewBuilding = function (type) {
      console.log(`create a new ${type}`);
      $scope.postData = {
        "user_id": $localStorage.userObj.userId,
        "type": type
      };
      console.log($scope.postData);
      BuildingsService.save($scope.postData);
    };

    $scope.upgradeBuilding = function (id, level) {
      console.log(id);
      console.log(level);
      $scope.updateBuilding = {
        "user_id": $localStorage.userObj.userId,
        "building_id": id,
        "level": level
      };
      console.log($scope.updateBuilding);
      BuildingsService.update($scope.updateBuilding)
    };

}]);
