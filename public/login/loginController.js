

angular.module("ClashApp").controller("LoginController", ['$scope', '$http', '$location', '$route', function($scope, $http, $location, $route){

  console.log("loginn")

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
      console.log(response.data.userId) //elmenteni!!!
      $location.path('/overview');
    }).catch(function() {
      console.log("ERROR");
    });

    $scope.username = "";
    $scope.password = "";
  };
}]);
