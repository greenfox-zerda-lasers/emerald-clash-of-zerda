angular
  .module("ClashApp")
  .controller("TroopsController", ['$scope', '$http', '$location', '$route', '$localStorage', 'TroopsService',
  function($scope, $http, $location, $route, $localStorage, TroopsService){

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

  $scope.trainTroop = function(id) {
    console.log(id, "id");
    $scope.troop = TroopsService.get({troopId: id})
      .$promise.then(function(result) {
        $scope.troopData = result;
        $scope.troopData.level += 1;
        $scope.troopData.$save({troopId: id});
      })
  }







}]);
