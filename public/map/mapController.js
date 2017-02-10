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
  $scope.showInfo = false

  var getPosition = (function() {
    mapFactory.search.query(name="").$promise.then(function(result) {

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

        }
        if(result[index].user.id != $localStorage.userObj.userId) {
          var xPosEnemy = result[index].position[0];
          var yPosEnemy = result[index].position[1];

          var enemyRow = document.querySelectorAll(".board-row")
          var enemyRowPos= enemyRow[yPosEnemy]
          var enemyCol = enemyRowPos.querySelectorAll(".board-elem")
          var enemyPosition = enemyCol[xPosEnemy]
          var name = result[index].user.username
          var id = result[index].user.id
          enemyPosition.classList.add("kingdomEnemy")
          enemyPosition.setAttribute("data", name)
          enemyPosition.setAttribute("id", id)
          enemyPosition.innerHTML = name
          enemyPosition.addEventListener("click", function(){
          })
        }
      })
    })
  })()

  $scope.selectEnemy = function(event) {
    if(event.target.classList.contains("kingdomEnemy")) {
      //event.target.style.backgroundColor = "blue"

       mapFactory.search.query({kingdom: event.target.innerHTML}).$promise.then(function(result) {
         console.log(result, "result")
         $scope.kingdomName = result[0].user.kingdom
         $scope.points = result[0].user.points
         $scope.troops = result[0].troops.length
         $scope.buildingsList = result[0].buildings
         $scope.showInfo = true

         $scope.attack = function() {
           $scope.opponent = {"opponent": event.target.id}
           console.log(event.target.id, "attack")
           mapFactory.attack.save($scope.opponent).$promise.then(function(result) {
           })
         }
       })
    }
  }

// Scroll to Kingdom method //

  $scope.scrollToKingdom = {

    getCoords: function (selector) {
      let element = document.querySelector(selector);
      let x = (element.offsetLeft-(window.innerWidth-element.clientWidth)/2);
      let y = (element.offsetTop-(window.innerHeight-element.clientHeight)/2);
      return {
        x: x, y: y
      }
    },

    toNode: function (selector) {
      console.log("scroll");
      let coords = this.getCoords(selector);
      window.scroll({top: coords.y, left: coords.x, behavior: 'smooth'});
    }
  };





}]);
