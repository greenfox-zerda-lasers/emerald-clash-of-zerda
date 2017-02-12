angular
  .module("ClashApp")
  .controller("MenuController", ['$scope', '$http', '$location', '$localStorage', 'MenuFactory', '$rootScope',
    function($scope, $http, $location, $localStorage, MenuFactory, $rootScope) {

  $scope.username = $localStorage.userObj.username;

  var renderMenuResources = (function() {
    $scope.resources = MenuFactory.query()
      .$promise
      .then(function(result) {
        $scope.food = result[0].amount;
        $scope.gold = result[1].amount;
      }).catch( function(error) {
        console.log(error);
      });
  })();

  $rootScope.$on('sendFood', function(event, args) {
    $scope.food = args
  });
  $rootScope.$on('sendGold', function(event, args) {
    $scope.gold = args
  });

  $scope.logOut = function() {
    $localStorage.userObj = {};
  };

}]);
