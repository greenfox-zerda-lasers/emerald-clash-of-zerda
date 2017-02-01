angular.module("ClashApp").controller("HistoryController", ['$scope', '$http', '$location', '$route', '$localStorage', 'HistoryFactory', function($scope, $http, $location, $route, $localStorage, HistoryFactory){

  var getBattleHistory = (function () {
    $scope.battleList = HistoryFactory
    .query()
    .$promise.then( function(response) {
      console.log(response);
    })
    .catch( function (error) {
      console.log(error);
    });
    
  })();

}]);
