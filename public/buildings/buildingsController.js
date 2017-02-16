angular.module("ClashApp").controller("BuildingsController", ['$scope', '$http', '$location', '$route', '$localStorage', '$rootScope', 'BuildingsFactory', 'MenuFactory', 'BroadcastFactory', function($scope, $http, $location, $route, $localStorage, $rootScope, BuildingsFactory, MenuFactory, BroadcastFactory){

  var getBuildings = (function() {
    $scope.buildingsList = BuildingsFactory.query();
    console.log($scope.buildingsList);
  })();

  $scope.BroadcastFactory = BroadcastFactory;

  $scope.addNewBuilding = function (type) {

    $scope.postData = {
      "user_id": $localStorage.userObj.userId,
      "type": type
    };

    BuildingsFactory.save($scope.postData)
      .$promise
      .then( function (response) {
        $scope.buildingsList.push(response);
        BroadcastFactory.buildingRegister(response);
      })
      .catch( function(error) {
        console.log(error);
        $scope.errorMessage = error.data.errors.upgrade;
        $scope.error = true;
      });
      $scope.updateResources();

  };

  $scope.upgradeBuilding = function (id, level) {
    $scope.updateBuilding = {
      "user_id": $localStorage.userObj.userId,
      "building_id": id,
      "level": level+1
    };

    BuildingsFactory.update($scope.updateBuilding)
      .$promise
      .then( function(response) {
        $scope.buildingsList[id] = response;
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
    })
    .catch( function(error) {
      console.log(error);
    });
  };

  $scope.$on('BuildingReg', function(event, data) {
    $scope.bar = data;
    console.log(data);
    $scope.$evalAsync();
  });

}]);
