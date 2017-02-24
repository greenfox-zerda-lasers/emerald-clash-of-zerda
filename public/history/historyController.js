angular.module("ClashApp").controller("HistoryController", ['$scope', '$http', '$location', '$route', '$localStorage', 'HistoryFactory', function($scope, $http, $location, $route, $localStorage, HistoryFactory){

  HistoryFactory.query()
  .$promise
  .then( function(response) {
    $scope.battleList = response;
  })
  .catch( function (error) {
    console.log(error);
  });

}]);
