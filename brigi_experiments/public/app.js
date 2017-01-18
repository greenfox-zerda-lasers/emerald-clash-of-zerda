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
        console.log(response);
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
        console.log(response);
      });

      $scope.username = "";
      $scope.kingdom = "";
      $scope.password = "";
    };
  }]);


  app.controller("OverviewController", ['$scope', '$http', function($scope, $http) {


  }]);


})();
