angular.module("ClashApp").controller("LeaderboardController", ['$scope', '$http', '$location', '$route', '$localStorage', 'LeaderboardFactory', function($scope, $http, $location, $route, $localStorage, LeaderboardFactory){

  $scope.userList = LeaderboardFactory.query();

}]);
