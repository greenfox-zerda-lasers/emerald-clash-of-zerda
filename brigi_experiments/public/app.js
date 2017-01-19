(function() {

  var app = angular.module("ClashApp", ["ngRoute"]);


  app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      }).
      when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'RegistrationController'
      }).
      when('/overview', {
        templateUrl: 'views/overview.html',
        controller: 'OverviewController'
      }).
      when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapController'
      }).
      when('/buildings', {
        templateUrl: 'views/buildings.html',
        controller: 'BuildingsController'
      }).
      when('/troops', {
        templateUrl: 'views/troops.html',
        controller: 'TroopsController'
      }).
      when('/resources', {
        templateUrl: 'views/resources.html',
        controller: 'ResourcesController'
      }).
      when('/leaderboard', {
        templateUrl: 'views/leaderboard.html',
        controller: 'LeaderboardController'
      }).
      when('/history', {
        templateUrl: 'views/history.html',
        controller: 'HistoryController'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }]);


  app.controller("LoginController", ['$scope', '$http', '$location', function($scope, $http, $location){

    //objektumkent megadni + stringify
    $scope.userLogin = function() {
      $scope.userData = {
        "username": $scope.username,
        "password": $scope.password
      };

      $http({
        method: 'POST',
        url: 'https://giant-idea.gomix.me/login',
        data: $scope.userData,
      }).then(function(response){
        console.log(response.data)
        userData.userId = response.data.userId;
        $location.path('/overview');
      }).catch(function() {
        console.log("ERROR");
      });

      $scope.username = "";
      $scope.password = "";


    };

  }]);


  app.controller("RegistrationController", ['$scope', '$http', function($scope, $http) {

    $scope.userRegistration = function() {
      $scope.regData = {
        "username": $scope.username,
        "kingdom": $scope.kingdom,
        "password": $scope.password
      };
      console.log($scope.regData);

      $http({
        method: 'POST',
        url: 'https://giant-idea.gomix.me/register',
        data: $scope.regData,
      }).then(function(response){
        console.log(response.data);
      });

      $scope.username = "";
      $scope.kingdom = "";
      $scope.password = "";
    };
  }]);


  app.controller("MenuController", ['$scope', '$http', '$location', function($scope, $http, $location) {

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


  app.controller("OverviewController", ['$scope', '$http', function($scope, $http) {

    $http({
      method: 'GET',
      url: 'https://giant-idea.gomix.me/kingdom/' + userData.userId + '/buildings'
    }).then(function(response){
      $scope.buildingTypes = buildingTypes;
      var data = response.data.buildings;
      userData.buildings = data;

      for(var b = 0; b < data.length; b++) {
        if(data[b].type === "townhall") {
          buildingTypes[0].number += 1;
        } else if(data[b].type === "mine") {
          buildingTypes[1].number += 1;
        } else if (data[b].type === "farm") {
          buildingTypes[2].number += 1;
        } else if (data[b].type === "barrack") { //javitani barracks-ra
          buildingTypes[3].number += 1;
        };
      };
    });

    $http({
      method: 'GET',
      url: 'https://giant-idea.gomix.me/kingdom/' + userData.userId + '/resources'
    }).then(function(response){
      $scope.resourcesTypes = resourcesTypes;
      var data = response.data.resources;
      console.log(data, "resources response")
      userData.resources = data;

      for(var r = 0; r < data.length; r++) {
        if(data[r].type === "food") {
          resourcesTypes[0].amount = data[r].amount;
        } else if(data[r].type === "gold") {
          resourcesTypes[1].amount = data[r].amount;
        };
      };
    });


    $http({
      method: 'GET',
      url: 'https://giant-idea.gomix.me/kingdom/' + userData.userId + '/troops'
    }).then(function(response){
      var data = response.data.troops;
      userData.troops = data;
      userData.troopsNumber = data.length;
      userData.buildings = data.buildings;
      userData.resources = data.resources;
      $scope.troops = userData.troopsNumber;
    });

  }]);


})();
