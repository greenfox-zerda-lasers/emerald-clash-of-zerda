angular.module("ClashApp").controller("MapController", ['$scope', '$http', '$location', '$route', 'mapFactory', '$localStorage', function($scope, $http, $location, $route, mapFactory, $localStorage){



  $scope.board = [

        [0, 0, 0, 1, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0],
  ]

  var xPos
  var yPos
  var kingdomPosition

  var getPosition = (function() {
    mapFactory.query().$promise.then(function(result) {
      console.log(result)

      result.forEach(function(elem, index) {
        if(result[index].user.id == $localStorage.userObj.userId) {
          xPos = result[index].position[0];
          yPos = result[index].position[1];

          var row = document.querySelectorAll(".board-row")
          var rowPos= row[yPos]
          var col = rowPos.querySelectorAll(".board-elem")
          kingdomPosition = col[xPos]
          kingdomPosition.classList.add("kingdom")
          kingdomPosition.innerHTML = "You"
          console.log(kingdomPosition)
        }
        if(result[index].user.id != $localStorage.userObj.userId) {
          var xPosEnemy = result[index].position[0];
          var yPosEnemy = result[index].position[1];

          var enemyRow = document.querySelectorAll(".board-row")
          var enemyRowPos= enemyRow[yPosEnemy]
          var enemyCol = enemyRowPos.querySelectorAll(".board-elem")
          var enemyPosition = enemyCol[xPosEnemy]
          var name = result[index].user.username
          enemyPosition.classList.add("kingdomEnemy")
          enemyPosition.innerHTML = name
          console.log(kingdomPosition)
        }
      })

    });
  })();











}]);
