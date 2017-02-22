
angular.module("ClashApp").controller("MapController", ['$scope', '$http', '$localStorage', '$location', '$resource', 'mapFactory',
function($scope, $http, $localStorage, $location, $resource, mapFactory){


  let getKingdoms = (function() {
    mapFactory.search.query()
      .$promise
      .then( function(response) {
        $scope.kingdomId = []
        $scope.kingdoms = []
        response.forEach(function(elem) {
          $scope.kingdomId.push(elem.user.id)
          $scope.kingdoms.push(elem.user)
          var userKingdom = new Kingdom(elem)
        })

      }.bind(this))
      .catch( function(error) {
        console.log(error);
      })
  })()


  var Kingdom = class Kingdom {
    constructor(elem) {
      this.buildings = elem.buildings
      this.location = elem.location
      this.resources = elem.resources
      this.troops = elem.troops
      this.id = elem.user.id
      this.kingdomName = elem.user.kingdom
      this.name = elem.user.username
      this.points = elem.user.points
      this.width = 600
      this.height = 600
      this.getData()
      this.ssvg = null;
      this.positionList = [
        "t190,190r90",
        "t-190,190r270",
        "t0,390r180",
        "t80,30r30",
        "t-80,30r330",
        "t-120,60r320",
        "t120,60,r40",
        "t170,110r65",
        "t-170,110r-65",
        "t180,270r110",
        "t-180,270r250",
        "t120,350r140",
        "t80,375r160",
        "t-80,375r200",
        //"t120,350r140",
        "t-170,270r250"
      ]
    }

    getData() {
      this.kingdomData = mapFactory.user.get({id: this.id})
        .$promise
        .then( function(response) {
          this.loadSVG(response)
        }.bind(this))
        .catch( function(error) {
          console.log(error);
        })
    }


    loadSVG(response) {
      Snap.load("img/map/island05-01.svg", f => {
        var s = Snap()
        s.attr({
            width: 600,
            height: 600,
        });
        s.addClass("zoomTarget")
        s.addClass("svg")

        document.querySelector('#kingdom'+this.id).appendChild(s.node)

        this.style = f.select("style")
        this.island = f.select("#island")
        this.spaceStation = f.select("#spaceStation_1_")
        this.mine = f.select("#mine_2_")
        this.factory = f.select("#factory_4_")
        this.academy = f.select("#academy")

        s.append(this.style)
        s.append(this.island)
        s.append(this.spaceStation)

        this.ssvg = s;
        this.checkPosition()
        this.renderMine()
        this.renderFactory()
        this.renderAcademy()
        console.log($localStorage.userObj.userId, "localstorage")
      })

      this.mineList = []
      this.factoryList = []
      this.academyList = []

      response.buildings.forEach(function(elem) {
        if (elem.type === "mine") {
          this.mineList.push(elem)
        } else if (elem.type === "farm") {
          this.factoryList.push(elem)
        } else if (elem.type === "barracks") {
          this.academyList.push(elem)
        }
      }.bind(this))
      this.renderSideBar()
    }


    checkPosition() {
      let object = document.querySelector('#kingdom'+this.id)
      //ajax get user location: {x: null, y: null}
      let location = {x: null, y: null}
      //ajax get enemylocation
      let enemyLocation = [{x: 1000, y: 100}, {x:0, y:0}]
      let enemyWidth = 600
      let enemyHeight = 600
      //if(location.x == null && location.y == null) {
        let xPos = (Math.random() * (20000-1200) + 600) //- this.width - 200
        let yPos = (Math.random() * (15000-1200) + 600) //- this.height - 200
        this.setPosition(xPos, yPos, object)

      //   for(var i = 0; i < enemyLocation.length; i++) {
      //
      //     if((xPos +this.width < enemyLocation[i].x && yPos + this.height < enemyLocation[i].y) || (xPos > enemyLocation[i].x +enemyWidth && yPos > enemyLocation[i].y +enemyHeight)) {
      //       this.setPosition(xPos, yPos, object)
      //     } else {
      //       // this.checkPosition()
      //
      //     }
      //   }
      // } else {
      //   let xPos = location.x
      //   let yPos = location.y
      // }
    }


    setPosition(xPos, yPos, object) {
      object.style.left = String(xPos) + "px"
      object.style.top = String(yPos) + "px"
      this.updatePosition()
      $scope.scrollToKingdom.toNode("#kingdom" + String($localStorage.userObj.userId))
      var myKingdom = document.querySelector('#kingdom' + String($localStorage.userObj.userId))
      myKingdom.style.zIndex = "1"
    }


    updatePosition() {
      var objects = document.querySelectorAll('.svgContainer')
      objects.forEach(function(elem) {
        if(elem.id == "kingdom" + String($localStorage.userObj.userId)) {
          elem.classList.add("ui-widget-content")
        }
      })
      $(".ui-widget-content").draggable();
    }


    //dinamikusra
    renderSideBar() {
      if(this.id == $localStorage.userObj.userId) {
        $scope.myName = this.kingdomName
        $scope.mineNum = this.mineList.length
        $scope.factoryNum = this.factoryList.length
        $scope.academyNum = this.academyList.length
        $scope.troops = this.troops.length
      }
    }

    renderAcademy() {
      this.academyList.forEach(function(elem){
        let max = this.positionList.length
        let index = Math.floor(Math.random() * max)
        let buildingPos = this.positionList[index]
        this.positionList.splice(index, 1)
        let newAcademy = this.academy.clone()
        this.ssvg.append(newAcademy)
        newAcademy.transform(buildingPos)
        //this.academy.transform("t-170,270r-110")
      }.bind(this))
    }

    renderFactory() {
      this.factoryList.forEach(function(elem){
        let max = this.positionList.length
        let index = Math.floor(Math.random() * max)
        let buildingPos = this.positionList[index]
        this.positionList.splice(index, 1)
        let newFactory = this.factory.clone()
        this.ssvg.append(newFactory)
        newFactory.transform(buildingPos)
      }.bind(this))
    }

    //matrix alapjan
    renderMine() {
      var show = false
      if(this.mineList.length > 0 && show == false) {
        this.ssvg.append(this.mine)
        show = true
      }
    }
  }



  //******************************BATTLE*************************

  $scope.showEnemy = false


  $scope.selectEnemy = function(userid) {
    if(userid != $localStorage.userObj.userId) {
      document.querySelector("#kingdom" + userid).style.backgroundColor = "rgba(252, 110, 35, 0.2)"
      console.log("sekectenemy");
      document.querySelector("#kingdom" + userid + " .attackButton").style.display = "inline-block"
      showDetails(userid)
      $scope.showEnemy = true
    }
  }

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
    //clickOut()
  }

  $scope.showTroops = false

  $scope.attack = function(defenderId) {
    $scope.getTroops(defenderId)
    document.querySelector("#kingdom" + defenderId + " .attackButton").style.display = "none"
    console.log(document.querySelector("#kingdom" + defenderId + " .attackButton"));
  }

  let attackerTroops = []

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
        renderBattleInfo(response)
      })
      .catch( function(error) {
        console.log(error);
      })
  }

  $scope.attackEnded = false

  let renderBattleInfo = function(response) {
    console.log(response, "battle");
    if(response.attacker.damage >= response.attacker.damage) {
      $scope.battleResult = "Huhuu, you won!"
    } else {
      $scope.battleResult = "Sorry! You lost!"
    }
    $scope.damageResult = response.attacker.damage
    $scope.troopsResult = response.attacker.troopsLost.length
    $scope.defendedKingdom = response.defender.user.kingdom

    let battleWindow = document.querySelector(".battleResult")
    battleWindow.style.left = String(window.innerWidth/2 - 200) + "px"
    battleWindow.style.top = String(window.innerHeight -200) + "px"
    console.log(String(window.innerWidth/2), "left");

    $scope.showEnemy = false
    $scope.attackEnded = true
  }

  //ez nem joo
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

  $(function() {
    $( "#automplete-1" ).autocomplete({
      source: $scope.kingdoms
    })
  })

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



  //master-rol attack
//   $scope.selectEnemy = function(event) {
//     if(event.target.classList.contains("kingdomEnemy")) {
//       //event.target.style.backgroundColor = "blue"

//        mapFactory.search.query({kingdom: event.target.innerHTML}).$promise.then(function(result) {
//          $scope.kingdomName = result[0].user.kingdom
//          $scope.points = result[0].user.points
//          $scope.troops = result[0].troops.length
//          $scope.buildingsList = result[0].buildings
//          $scope.showInfo = true

//          $scope.attack = function() {
//            $scope.opponent = {"opponent": event.target.id}
//            console.log(event.target.id, "attack")
//            mapFactory.attack.save($scope.opponent).$promise.then(function(result) {
//            })
//          }
//        })
//     }



}]);
