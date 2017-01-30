angular.module("ClashApp").controller("TroopsController", ['$scope', '$http', '$location', '$route', '$localStorage', 'TroopsService', function($scope, $http, $location, $route, $localStorage, TroopsService){

  if ($localStorage.userObj.userId === false) {
    $location.path('/login');
  } else {
    $scope.kingdom = $localStorage.userObj.kingdom;
  }


  //length?
  var getTroops = (function() {
    $scope.troops = TroopsService.query();
    console.log($scope.troops, "troops")
  })();



  // $scope.getTroopData = function(id) {
  //   console.log("click");
  //   console.log(id);
  //   $scope.troopResponse = {}
  //   $scope.troopResponse.open = false;
  //
  //   $http({
  //     method: 'GET',
  //     url: 'http://localhost:8000/kingdom/' + $localStorage.userObj.userId + '/troops/' + id //2 helyett troopId
  //   }).then(function(response){
  //     $scope.troopResponse.id = response.data.troop.id;
  //     $scope.troopResponse.hp = response.data.troop.hp;
  //     $scope.troopResponse.attack = response.data.troop.attack;
  //     $scope.troopResponse.defense = response.data.troop.defense;
  //     $scope.troopResponse.level = response.data.troop.level;
  //     //$scope.troopResponse.open = false;
  //     $scope.troopResponse.open = true
  //     console.log($scope.troopResponse)
  //     //$scope.open = true
  //   });
  //
  // };



}]);
