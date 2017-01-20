angular.module("ClashApp").controller("MenuController", ['$scope', '$http', '$location', function($scope, $http, $location) {


  $scope.getUserData = function() {
    console.log("function fired");

    $http({
      method: 'GET',
      url: 'https://giant-idea.gomix.me/kingdom/' + userData.userId + '/buildings'
    }).then(function(response){
      console.log(response.data);
      userData.buildings = response.data.buildings;
      console.log(userData.buildings, "userdata");
    });

    $http({
      method: 'GET',
      url: 'https://giant-idea.gomix.me/kingdom/' + userData.userId + '/resources'
    }).then(function(response){
      console.log(response.data);
      userData.resources = response.data.resources;
    });


    $http({
      method: 'GET',
      url: 'https://giant-idea.gomix.me/kingdom/' + userData.userId + '/troops'
    }).then(function(response){
      console.log(response.data);
      userData.troops = response.data.troops;
      console.log(userData.troops, "userdata.troops");
    });
  };

  $scope.logOut = function() {
    console.log("logout fire");
    $location.path('/login');
  };
}]);
