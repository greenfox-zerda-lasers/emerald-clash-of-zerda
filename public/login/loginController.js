

angular.module("ClashApp").controller("LoginController", ['$scope', '$http', '$location', '$route', '$localStorage', function($scope, $http, $location, $route, $localStorage){

  console.log("loginn")
  $localStorage.userObj.userId = 0;
  console.log($localStorage.userObj.userId);

  //objektumkent megadni + stringify
  $scope.userLogin = function() {

    $scope.userData = {
      "username": $scope.username,
      "password": $scope.password
    };


    $http({
      method: 'POST',
      url: 'https://giant-idea.gomix.me/login',
      data: $scope.userData,
    }).then(function(response){

      console.log(response.data);
      $localStorage.userObj = {userId: response.data.userId, kingdom: response.data.kingdom, username: response.data.username, points: response.data.points};
      console.log($localStorage.userObj);
      debugger
      $location.path('/overview');
    }).catch(function() {
      console.log("ERROR");
    });

    $scope.username = "";
    $scope.password = "";
  };
}]);
