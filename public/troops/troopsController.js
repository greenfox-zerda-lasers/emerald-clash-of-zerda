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


  //length?
  var getTroops = (function() {
    $scope.troops = TroopsService.query();
    console.log($scope.troops, "troops")
    console.log($scope.troops.$promise.$$state.value)
  })();






}]);
