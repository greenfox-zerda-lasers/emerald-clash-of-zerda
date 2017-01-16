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
        //controller: 'SignupController'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }]);


  app.controller("LoginController", ['$scope', '$http', function($scope, $http){

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
        console.log(response)
      })

      //userData-t visszakuldeni
      console.log($scope.userData);
      $scope.username = "";
      $scope.password = "";
    };


  }]);


})();
