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
      BuildingsService.save($scope.postData)
        .$promise.then( function (response) {
          console.log(response);

          $scope.buildingsList.push(response);
        })
        .catch( function(error) {
          console.log(error);
          $scope.errorMessage = error.data.errors.upgrade;
          $scope.error = true;
        });
    };

    $scope.upgradeBuilding = function (id, level) {
      console.log("building id",id);
      console.log("level",level);
      $scope.updateBuilding = {
        "user_id": $localStorage.userObj.userId,
        "building_id": id,
        "level": level+1
      };

      BuildingsService.update($scope.updateBuilding)
        .$promise
        .then( function (response) {
          $scope.buildingsList[id] = response;
          console.log(response);
        })
        .catch(function(error){
          console.log(error);
          $scope.errorMessage = error.data.errors.upgrade;
          $scope.error = true;
        });
    };

    // valami

}]);
