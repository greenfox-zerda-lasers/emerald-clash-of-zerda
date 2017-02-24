
angular.module("ClashApp").controller("MapController", ['$scope', '$http', '$localStorage', '$location', '$resource', 'mapFactory', 'kingdomFactory',
function($scope, $http, $localStorage, $location, $resource, mapFactory, kingdomFactory){


  let getKingdoms = (function() {
    mapFactory.search.query()
      .$promise
      .then( function(response) {
        $scope.kingdomId = []
        $scope.kingdoms = []
        response.forEach(function(elem) {
          $scope.kingdomId.push(elem.user.id)
          $scope.kingdoms.push(elem.user)
          var userKingdom = new kingdomFactory(elem, $scope)
        })

      }.bind(this))
      .catch( function(error) {
        console.log(error);
      })
  })()


  $scope.showEnemy = false

  // select enemy
  $scope.selectEnemy = function(userid) {
    if(userid != $localStorage.userObj.userId) {
      document.querySelector("#kingdom" + userid).style.backgroundColor = "rgba(252, 110, 35, 0.2)"
      console.log("sekectenemy");
      document.querySelector("#kingdom" + userid + " .attackButton").style.display = "inline-block"
      showDetails(userid)
      $scope.showEnemy = true
      $scope.attackEnded = false
    }
  }

  //show enemy details
  let showDetails = function(userid) {
    mapFactory.user.get({id: userid})
      .$promise
      .then( function(response) {
        $scope.kingdom = response.user.kingdom
        $scope.troopsNum = response.troops.length
        // $scope.troops = response.troops
        isMine(response.buildings)
        isFactory(response.buildings)
        isAcademy(response.buildings)
        stationLevel(response.buildings)
      })
      .catch( function(error) {
        console.log(error);
      })

    $scope.showEnemy = true
  }

  $scope.showTroops = false

  //attack button clicked
  $scope.attack = function(defenderId) {
    $scope.getTroops(defenderId)
    document.querySelector("#kingdom" + defenderId + " .attackButton").style.display = "none"
    console.log(document.querySelector("#kingdom" + defenderId + " .attackButton"));
  }

  let attackerTroops = []

  //available troops list
  $scope.getTroops = function(defenderId) {
    mapFactory.search.query({kingdom: $localStorage.userObj.kingdom})
      .$promise
      .then( function(response) {
        $scope.myTroops = response[0].troops
      })
      .catch( function(error) {
        console.log(error);
      })
      $scope.showTroops = true
      document.querySelector(".startBattleButton").addEventListener("click", function(event) {
        $scope.startBattle(defenderId)
      })
  }

  //select troops for battle
  $scope.selectTroop = function(troopId){
    let troop = document.querySelector(".troop" + troopId)
    if(troop.classList.contains("selectedTroop")) {
      troop.classList.remove("selectedTroop")
      let index = attackerTroops.indexOf(troopId)
      attackerTroops.splice(index)
    } else {
      attackerTroops.push(troopId)
      troop.classList.add("selectedTroop")
    }
  }

  //start battle button clicked
  $scope.startBattle = function(defenderId) {
    let attackData = {
      "opponent" : defenderId,
      "troops" : attackerTroops.join(",")
    }
    $scope.showTroops = false
    document.querySelector("#kingdom" + defenderId + " .attackButton").style.display = "none"
    mapFactory.attack.save(attackData)
      .$promise
      .then(function(response) {
        renderBattleInfo(response, defenderId)
      })
      .catch( function(error) {
        console.log(error);
      })
  }

  $scope.attackEnded = false

  //battle result window
  let renderBattleInfo = function(response, defenderId) {
    const icon = document.querySelector(".icon")
    document.querySelector("#kingdom" + defenderId).style.backgroundColor = "rgba(252, 110, 35, 0)"
    if(response.attacker.damage >= response.attacker.damage) {
      $scope.battleResult = "Huhuu, you won!"
      icon.classList.add("winIcon")
    } else {
      $scope.battleResult = "Sorry! You lost!"
      icon.classList.add("lostIcon")
    }
    $scope.damageResult = response.attacker.damage
    $scope.troopsResult = response.attacker.troopsLost.length
    $scope.defendedKingdom = response.defender.user.kingdom

    let battleWindow = document.querySelector(".battleResult")
    battleWindow.style.left = String(window.innerWidth/2 - 200) + "px"
    battleWindow.style.top = String(window.innerHeight -200) + "px"

    $scope.showEnemy = false
    $scope.attackEnded = true
  }

  //work in progress
  let clickOut = function() {
    let enemy = document.querySelector(".svgContainer")
    enemy.style.zIndex = "5"
    let overlay = document.createElement("div")
    overlay.classList.add("overlay")
    document.querySelector("#map").appendChild(overlay)
    overlay.addEventListener("click", function(event) {
        overlay.classList.remove("overlay")
        $scope.showEnemy = false
    })
  }

  //check building types
  let isMine = function(building) {
    let mines = building.filter(function(elem){
      return elem.type === "mine"
    })
    $scope.mineNumEnemy = mines.length
  }

  let isFactory = function(building) {
    let factories = building.filter(function(elem){
      return elem.type === "farm"
    })
    $scope.factoryNumEnemy = factories.length
  }

  let isAcademy = function(building) {
    let academies = building.filter(function(elem){
      return elem.type === "barracks"
    })
    $scope.academyNumEnemy = academies.length
  }

  let stationLevel = function(building) {
    let station = building.filter(function(elem){
      return elem.type === "townhall"
    })
    $scope.stationLevelEnemy = station[0].level
  }

  //select enemy kingdom
  $scope.selectKingdom = function() {
    var selected = "#kingdom" + $scope.selected
    $scope.scrollToKingdom.toNode(selected)
  }

  //scroll to kingdom
  $scope.scrollToKingdom = {
    getCoords: function (selector) {
      let element = document.querySelector(String(selector));
      let x = (element.offsetLeft-(window.innerWidth-element.clientWidth)/2);
      let y = (element.offsetTop-(window.innerHeight-element.clientHeight)/3);
      return {
        x: x, y: y
      }
    },

    toNode: function (selector) {
      let coords = this.getCoords(selector);
      window.scroll({top: coords.y, left: coords.x, behavior: 'smooth'});
    },

    //select my kingdom
    home: function() {
      let selector = "#kingdom" + $localStorage.userObj.userId
      this.toNode(selector)
    }
  };

  //background scroll
  var bg = document.querySelector("#map")
  if(bg) {
    window.addEventListener('scroll', function() {
      var positionY = window.pageYOffset/20
      var positionX = window.pageXOffset/20
      bg.style.backgroundPosition = positionX + "px " + positionY + "px"
    })
  }

}]);
