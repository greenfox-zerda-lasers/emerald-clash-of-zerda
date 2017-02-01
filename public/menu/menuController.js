angular
  .module("ClashApp")
  .controller("MenuController", ['$scope', '$http', '$location', '$localStorage', 'MenuService',
    function($scope, $http, $location, $localStorage, MenuService) {

  $scope.username = $localStorage.userObj.username;

  var renderMenuResources = (function() {
    $scope.resources = MenuService.query()
      .$promise.then(function(result) {
        $scope.food = result[0].amount;
        $scope.gold = result[1].amount;
      });
  })();

  $scope.logOut = function() {
    $localStorage.userObj = {};
  };

}]);
