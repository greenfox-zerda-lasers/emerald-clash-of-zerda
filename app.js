(function() {

  var app = angular.module("ClashApp", ['ngRoute', 'ngStorage']);
  console.log("app")

  app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: './public/login/login.html',
        controller: 'LoginController'
      }).
      when('/register', {
        templateUrl: './public/register/register.html',
        controller: 'RegController'
      }).
      when('/overview', {
        templateUrl: './public/overview/overview.html',
        controller: 'OverviewController'
      }).
      when('/map', {
        templateUrl: './public/map/map.html',
        controller: 'MapController'
      }).
      when('/buildings', {
        templateUrl: './public/buildings/buildings.html',
        controller: 'BuildingsController'
      }).
      when('/troops', {
        templateUrl: './public/troops/troops.html',
        controller: 'TroopsController'
      }).
      when('/resources', {
        templateUrl: './public/resources/resources.html',
        controller: 'ResourcesController'
      }).
      when('/leaderboard', {
        templateUrl: './public/leaderboard/leaderboard.html',
        controller: 'LeaderboardController'
      }).
      when('/history', {
        templateUrl: './public/history/history.html',
        controller: 'HistoryController'
      }).
      when('/profile', {
        templateUrl: './public/profile/profile.html',
        controller: 'ProfileController'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }]);

})();
