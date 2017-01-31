angular.module("ClashApp").controller("LeaderboardController", ['$scope', '$http', '$location', '$route', '$localStorage', 'LeaderboardFactory', function($scope, $http, $location, $route, $localStorage, LeaderboardFactory){

  var getUsers = (function() {
    $scope.userList = LeaderboardFactory.query();
    console.log($scope.userList);
  })();

}]);
