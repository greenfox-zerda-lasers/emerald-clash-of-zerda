angular
  .module("ClashApp")
  .controller("MenuController", ['$scope', '$http', '$location', '$localStorage',
    function($scope, $http, $location, $localStorage) {

  $scope.username = $localStorage.userObj.username;

  $scope.logOut = function() {
    $localStorage.userObj = {};
  };
  
}]);
