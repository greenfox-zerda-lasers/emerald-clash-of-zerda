angular
  .module("ClashApp")
  .controller("TroopsController", ['$scope', '$http', '$location', '$route', '$localStorage', 'TroopsService', 'MenuService', '$rootScope',
  function($scope, $http, $location, $route, $localStorage, TroopsService, MenuService, $rootScope){

  if ($localStorage.userObj.userId === false) {
    $location.path('/login');
  } else {
    $scope.kingdom = $localStorage.userObj.kingdom;
    $scope.username = $localStorage.userObj.username;
  }

  var getTroops = (function() {
    $scope.troopsData = TroopsService.query()
      .$promise.then(function(result) {
        $scope.troops = result;
      });
  })();

  $scope.stop = true;
  $scope.error = false;

  $scope.trainTroop = function(id) {

    if($scope.stop) {
      TroopsService.get({troopId: id}).$promise.then(function(result) {
        $scope.troopData = result;
        $scope.troopData.level = $scope.troopData.level + 1;
        TroopsService.update({troopId: id}, {level:$scope.troopData.level})
        .$promise.then(function(response) {
          $scope.troops[id] = response;
        },function(error) {
            if(error.status === 400) {
              $scope.errorMessage = error.data.errors.upgrade
              $scope.error = true;
              $scope.stop = false
              console.log("elfogyott a peeeenzed!!")
            }
          }
        )
      })
    }
    updateMenu()
  };

  //only clickable if user has barracks
  $scope.addTroop = function() {
    TroopsService.save().$promise.then(function(response) {
      console.log(response, "addtroop")
      $scope.troops.push(response)
    },function(error) {
        if(error.status === 400) {
          $scope.errorMessage = error.data.errors.upgrade
          $scope.error = true;
          $scope.stop = false
          console.log("elfogyott a peeeenzed!!")
        }
      })
  }


  function updateMenu() {
    MenuService.query().$promise.then(function(result) {
      $scope.food = result[0].amount;
      $scope.gold = result[1].amount;
      $rootScope.$broadcast('sendFood', $scope.food)
      $rootScope.$broadcast('sendGold', $scope.gold)
    });
  }

}]);
