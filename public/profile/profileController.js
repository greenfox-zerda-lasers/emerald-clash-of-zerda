angular.module("ClashApp").controller("ProfileController", ['$scope', '$http', '$location', '$route', '$localStorage', '$rootScope', 'ProfileFactory', 'LeaderboardFactory', 'MenuFactory', function($scope, $http, $location, $route, $localStorage, $rootScope, ProfileFactory, LeaderboardFactory, MenuFactory){

  var getUserInfo = (function () {
    $scope.userData = ProfileFactory.get()
      .$promise
      .then(function(result) {
        $scope.userInfo = result.user;
      })
      .catch(function(error) {
        console.log(error);
      });
  })();

  var getUserList = (function () {
    $scope.userList = LeaderboardFactory.query()
      .$promise
      .then(function(result) {
        $scope.userPlace = result;
        console.log($scope.userPlace);
        $scope.userRanking = getUserPlace($scope.userPlace);
      })
      .catch(function(error) {
        console.log(error);
      });
  })();

  var getUserPlace = function (data) {
    let ranking = 0;
    data.forEach( function (user, index) {
      if (user.id === $localStorage.userObj.userId) {
        ranking = index+1;
      };
    });
    return ranking;
  };


}]);
