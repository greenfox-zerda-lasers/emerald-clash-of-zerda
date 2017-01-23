angular.module("ClashApp").controller("TroopsController", ['$scope', '$http', '$location', '$route', '$localStorage', function($scope, $http, $location, $route, $localStorage){

  if ($localStorage.userObj.userId === 0) {
    $location.path('/login');
  } else {
    $scope.kingdom = $localStorage.userObj.kingdom;
  }


  $http({
    method: 'GET',
    url: 'https://giant-idea.gomix.me/kingdom/' + $localStorage.userObj.userId + '/troops'
  }).then(function(response){
    var data = response.data.troops;
    $scope.troopsAmount = data.length;
    $scope.troops = data
    //console.log($scope.troops, "troops")
  });


  $scope.getTroopData = function(id) {
    console.log("click");
    console.log(id);
    $scope.open = false;

    $http({
      method: 'GET',
      url: 'https://giant-idea.gomix.me/kingdom/' + $localStorage.userObj.userId + '/troops/' + id //2 helyett troopId
    }).then(function(response){
      $scope.troopResponse = response.data
      console.log(response)
      if ()
      $scope.open = true
    });

  };



}]);
