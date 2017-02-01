angular
  .module("ClashApp")
  .controller("MenuController", ['$scope', '$http', '$location', '$localStorage', 'MenuService', '$rootScope',
    function($scope, $http, $location, $localStorage, MenuService, $rootScope) {

  $scope.username = $localStorage.userObj.username;

  var renderMenuResources = (function() {
    $scope.resources = MenuService.query()
      .$promise.then(function(result) {
        $scope.food = result[0].amount;
        $scope.gold = result[1].amount;
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
