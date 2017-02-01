angular
  .module("ClashApp")
  .controller("TroopsController", ['$scope', '$http', '$location', '$route', '$localStorage', 'TroopsService', 'MenuService',
  function($scope, $http, $location, $route, $localStorage, TroopsService, MenuService){

  if ($localStorage.userObj.userId === false) {
    $location.path('/login');
  } else {
    $scope.kingdom = $localStorage.userObj.kingdom;
    $scope.username = $localStorage.userObj.username;
  }

  var getTroops = (function() {
    $scope.troopsData = TroopsService.query()
      .$promise.then(function(result) {
        $scope.troops = result;
      });
  })();

  $scope.valami = true;
  $scope.trainTroop = function(id) {

    if($scope.valami) {
      $scope.troop = TroopsService.get({troopId: id})
        .$promise.then(function(result) {
          $scope.troopData = result;
          $scope.troopData.level = $scope.troopData.level + 1;
          TroopsService.update({troopId: id}, {level:$scope.troopData.level})
            .$promise.then(function(response) {
             $scope.troops[id] = response;
          }, function(error) {
              if(error.status === 400) {
                $scope.errorMessage = error.data.errors.upgrade
                $scope.error = true;
                $scope.valami = false
              }}
            )})
    } else {
      console.log("elfogyott a peeeenzed!!")
    }
    MenuService.query().$promise.then(function(result) {
        console.log("lefut")
        $scope.food = result[0].amount;
        $scope.gold = result[1].amount;
      });
    }
}]);
