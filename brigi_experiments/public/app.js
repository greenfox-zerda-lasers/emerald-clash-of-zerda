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
      when('/map', {
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


  app.controller("LoginController", ['$scope', '$http', function($scope, $http){

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
        var data = response.data
        userData.userId = data.userId;
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


  app.controller("MenuController", ['$scope', '$http', function($scope, $http) {

    $scope.getUserData = function() {
      console.log("function fired")

      $http({
        method: 'GET',
        url: 'https://giant-idea.gomix.me/kingdom/' + userData.userId + '/buildings'
      }).then(function(response){
        console.log(response.data);
        userData.buildings = response.data.buildings
      });

      $http({
        method: 'GET',
        url: 'https://giant-idea.gomix.me/kingdom/' + userData.userId + '/resources'
      }).then(function(response){
        console.log(response.data);
        userData.resources = response.data.resources
      });


      $http({
        method: 'GET',
        url: 'https://giant-idea.gomix.me/kingdom/' + userData.userId + '/troops'
      }).then(function(response){
        console.log(response.data);
        userData.troops = response.data.troops
      });

    };


  }]);


  app.controller("OverviewController", ['$scope', '$http', function($scope, $http) {

    $scope.buildingTypes = buildingTypes;
    $scope.troops = userData.troops;
    $scope.resourcesTypes = resourcesTypes;

  }]);


})();
