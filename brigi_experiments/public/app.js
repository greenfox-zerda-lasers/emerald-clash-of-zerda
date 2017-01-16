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


})();
