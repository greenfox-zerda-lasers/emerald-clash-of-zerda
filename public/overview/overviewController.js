
angular.module("ClashApp").controller("OverviewController", ['$scope', '$http', function($scope, $http) {

  console.log("r")

  $http({
    method: 'GET',
    url: 'https://giant-idea.gomix.me/kingdom/' + 1 + '/buildings'
  }).then(function(response){


    var data = response.data.buildings;

    $scope.buildingTypes = [
      {type: "Townhall", image: "https://d30y9cdsu7xlg0.cloudfront.net/png/5841-200.png", amount: 0},
      {type: "Mine", image: "https://d30y9cdsu7xlg0.cloudfront.net/png/543-200.png", amount: 0},
      {type: "Farm", image: "https://d30y9cdsu7xlg0.cloudfront.net/png/25362-200.png", amount: 0},
      {type: "Barracks", image: "https://cdn3.iconfinder.com/data/icons/ahasoft-war/512/barracks-512.png", amount: 0}
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

  $http({
    method: 'GET',
    url: 'https://giant-idea.gomix.me/kingdom/' + 1 + '/resources'
  }).then(function(response){

    var data = response.data.resources;

    $scope.resourceTypes = [
      {type: "Food", image: "http://icons.iconarchive.com/icons/icons8/windows-8/128/Food-Doughnut-icon.png"},
      {type: "Gold", image: "https://cdn1.iconfinder.com/data/icons/jewery/500/gold-512.png"}
    ];

    console.log(data, "resources response")

    for(var r = 0; r < data.length; r++) {
      if(data[r].type === "food") {
        $scope.resourceTypes[0].amount = data[r].amount;
      } else if(data[r].type === "gold") {
        $scope.resourceTypes[1].amount = data[r].amount;
      };
    };
  });


  $http({
    method: 'GET',
    url: 'https://giant-idea.gomix.me/kingdom/' + 1 + '/troops'
  }).then(function(response){
    console.log(response)
    var data = response.data.troops;
    console.log(data, "troops data")
    $scope.troops = data.length;
  });

}]);
