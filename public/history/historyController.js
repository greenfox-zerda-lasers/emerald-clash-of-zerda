angular.module("ClashApp").controller("HistoryController", ['$scope', '$http', '$location', '$route', '$localStorage', 'HistoryFactory', function($scope, $http, $location, $route, $localStorage, HistoryFactory){

  var getBattleHistory = (function () {
    HistoryFactory.query()
    .$promise.then( function(response) {
      $scope.battleList = response;
      console.log($scope.battleList);

    })
    .catch( function (error) {
      console.log(error);
    });
  })();
  
}]);
