angular.module("ClashApp").controller("BuildingsController", ['$scope', '$http', '$location', '$route', '$localStorage', '$rootScope', 'BuildingsFactory', 'MenuFactory', function($scope, $http, $location, $route, $localStorage, $rootScope, BuildingsFactory, MenuFactory){

  var getBuildings = (function() {
    $scope.buildingsList = BuildingsFactory.query();
    console.log($scope.buildingsList);
  })();

  $scope.addNewBuilding = function (type) {
    console.log(`create a new ${type}`);
    $scope.postData = {
      "user_id": $localStorage.userObj.userId,
      "type": type
    };
    console.log($scope.postData);
    BuildingsFactory.save($scope.postData)
      .$promise.then( function (response) {
        console.log(response);

        $scope.buildingsList.push(response);
      })
      .catch( function(error) {
        console.log(error);
        $scope.errorMessage = error.data.errors.upgrade;
        $scope.error = true;
      });
      $scope.updateResources();
  };

  $scope.upgradeBuilding = function (id, level) {
    console.log("building id",id);
    console.log("level",level);
    $scope.updateBuilding = {
      "user_id": $localStorage.userObj.userId,
      "building_id": id,
      "level": level+1
    };

    BuildingsFactory.update($scope.updateBuilding)
      .$promise
      .then( function(response) {
        $scope.buildingsList[id] = response;
        console.log(response);
      })
      .catch( function(error){
        console.log(error);
        $scope.errorMessage = error.data.errors.upgrade;
        $scope.error = true;
      });
      $scope.updateResources();
  };

  $scope.updateResources = function () {
    MenuFactory.query()
      .$promise
      .then( function(result) {
        $scope.food = result[0].amount;
        $scope.gold = result[1].amount;
        $rootScope.$broadcast('sendFood', $scope.food);
        $rootScope.$broadcast('sendGold', $scope.gold);
    });
  };
}]);
