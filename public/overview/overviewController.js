angular.module("ClashApp").controller("OverviewController", ['$scope', '$http', '$localStorage', '$location', '$resource', 'OverviewFactory', function($scope, $http, $localStorage, $location, $resource, OverviewFactory) {

  if ($localStorage.userObj.userId === false) {
    $location.path('/login');
  } else {
    $scope.kingdom = $localStorage.userObj.kingdom;

    var getKingdomData = (function () {
      $scope.kingdomData = OverviewFactory.get()
        .$promise
        .then( function(result) {
          $scope.buildings = result.buildings;
          $scope.troops = result.troops;
          $scope.resources = result.resources;
          $scope.buildingTypes = getBuildings($scope.buildings);
          $scope.resourceTypes = getResources($scope.resources);
        })
        .catch( function(error) {
          console.log(error);
        });
    })();

    var getBuildings = function (data) {
      var townhall = 0;
      var mine = 0;
      var farm = 0;
      var barrack = 0;
      data.forEach( function(building) {
        switch (building.type) {
          case "townhall":
            townhall++;
            break;
          case "mine":
            mine++;
            break;
          case "farm":
            farm++;
            break;
          case "barrack":
            barrack++;
            break;
        };
      });
      return {townhall, mine, farm, barrack};
    };

    var getResources = function (data) {
      var food = 0;
      var gold = 0;
      data.forEach( function(resource) {
        switch (resource.type) {
          case "food":
            food = resource.amount;
          case "gold":
            gold = resource.amount;
        };
      });
      return {food, gold};
    };
  };
}]);
