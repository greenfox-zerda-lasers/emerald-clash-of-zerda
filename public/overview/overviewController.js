angular.module("ClashApp").controller("OverviewController", ['$scope', '$http', '$localStorage', '$location', '$resource', 'OverviewService', function($scope, $http, $localStorage, $location, $resource, OverviewService) {

  if ($localStorage.userObj.userId === false) {
    $location.path('/login');
  } else {
    $scope.kingdom = $localStorage.userObj.kingdom;

    var getKingdomData = (function () {
      $scope.kingdomData = OverviewService.get()
        .$promise.then( function(result) {
          $scope.buildings = result.buildinds;
          $scope.troops2 = result.troops;
          $scope.resources = result.resources;
          console.log(result.buildings);
          console.log(result.troops);
          console.log(result.resources);
        });
      // console.log($scope.kingdomData);
    })();

    console.log($scope.buildings);
    console.log($scope.kingdomData);
    console.log($scope.kingdom);

    //BUILDINGS
    $http({
      method: 'GET',
      url: 'http://localhost:8000/kingdom/' + $localStorage.userObj.userId
    }).then(function(response){

      console.log(response, "buildings")
      var data = response.data.buildings;


      $scope.buildingTypes = [
        {type: "Townhall", image: "http://image.flaticon.com/icons/svg/288/288698.svg", amount: 0},
        {type: "Mine", image: "http://image.flaticon.com/icons/svg/234/234785.svg", amount: 0},
        {type: "Farm", image: "http://image.flaticon.com/icons/svg/284/284493.svg", amount: 0},
        {type: "Barracks", image: "http://image.flaticon.com/icons/svg/284/284425.svg", amount: 0}
      ];

      for(var b = 0; b < data.length; b++) {
        if(data[b].type === "townhall") {
          $scope.buildingTypes[0].amount += 1;
        } else if(data[b].type === "mine") {
          $scope.buildingTypes[1].amount += 1;
        } else if (data[b].type === "farm") {
          $scope.buildingTypes[2].amount += 1;
        } else if (data[b].type === "barrack") { //javitani barracks-ra
          $scope.buildingTypes[3].amount += 1;
        };
      };
    });


    //RESOURCES
    $http({
      method: 'GET',
      url: 'http://localhost:8000/kingdom/' + $localStorage.userObj.userId + '/resources'
    }).then(function(response){
      console.log(response, "resources")

      var data = response.data;

      $scope.resourceTypes = [
        {type: "Food", image: "http://image.flaticon.com/icons/svg/168/168559.svg"},
        {type: "Gold", image: "http://image.flaticon.com/icons/svg/199/199533.svg"}
      ];

      for(var r = 0; r < data.length; r++) {
        if(data[r].type === "food") {
          $scope.resourceTypes[0].amount = data[r].amount;
        } else if(data[r].type === "gold") {
          $scope.resourceTypes[1].amount = data[r].amount;
        };
      };
    });


    //TROOPS
    $http({
      method: 'GET',
      url: 'http://localhost:8000/kingdom/' + $localStorage.userObj.userId + '/troops'
    }).then(function(response){
      console.log(response, "troops")
      var data = response.data;
      $scope.troopsAmount = data.length;
      $scope.troops = data
      // console.log($scope.troops, "troops")
    });

  };


}]);
