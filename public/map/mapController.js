
angular.module("ClashApp").controller("MapController", ['$scope', '$http', '$localStorage', '$location', '$resource', 'mapFactory', function($scope, $http, $localStorage, $location, $resource, mapFactory){


  let getKingdoms = (function() {
    console.log( "map", $localStorage.userObj.token);
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
      // this.width = document.querySelector(".svgContainer").style.width
      // this.height = document.querySelector(".svgContainer").style.height
      this.width = 550
      this.height = 600
      this.getData()
      this.ssvg = null;
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
      Snap.load("img/map/island02.svg", f => {
        var s = Snap()
        s.attr({
            width: 700,
            height: 500,
        });
        s.addClass("zoomTarget")
        s.addClass("svg")

        document.querySelector('#kingdom'+this.id).appendChild(s.node)

        this.style = f.select("style")
        this.island = f.select("#island")
        this.spaceStation = f.select("#spaceStation_1_")
        this.mine = f.select("#mine_1_")
        this.factory = f.select("#factory")
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
        this.renderSideBar()
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
    }

    checkPosition() {
      console.log("checkPosition");
      let object = document.querySelector('#kingdom'+this.id)
      //ajax get user location: {x: null, y: null}
      let location = {x: null, y: null}
      //ajax get enemylocation
      let enemyLocation = [{x: 1000, y: 100}, {x:0, y:0}]
      let enemyWidth = 600
      let enemyHeight = 600
      //if(location.x == null && location.y == null) {
        let xPos = (Math.random() * 20000) - this.width - 200
        let yPos = (Math.random() * 15000) - this.height - 200
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
      console.log("setPosition");
      object.style.left = String(xPos) + "px"
      object.style.top = String(yPos) + "px"
      this.updatePosition()
      $scope.scrollToKingdom.toNode("#kingdom" + String($localStorage.userObj.userId))
      var myKingdom = document.querySelector('#kingdom' + String($localStorage.userObj.userId))
      myKingdom.style.zIndex = "1"
      console.log(this.id, xPos, yPos)
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


    renderSideBar() {
      if(this.id == $localStorage.userObj.userId) {
        $scope.myName = this.kingdomName
        $scope.mineNum = this.mineList.length
        $scope.factoryNum = this.factoryList.length
        $scope.academyNum = this.academyList.length
      }
    }

    renderAcademy() {
      var show = false
      if(this.academyList.length > 0 && show == false) {
        this.ssvg.append(this.academy)
        show = true
      }
    }

    renderFactory() {
      var show = false
      if(this.factoryList.length > 0 && show == false) {
        this.ssvg.append(this.factory)
        show = true
      }
    }

    renderMine() {
      var show = false
      if(this.mineList.length > 0 && show == false) {
        this.ssvg.append(this.mine)
        show = true
      }
    }
  };


  $scope.showEnemy = false

  $scope.selectEnemy = function(userid) {
    if(userid != $localStorage.userObj.userId) {
      //document.querySelector("#kingdom" + userid).style.border = "1px solid white"
      document.querySelector("#kingdom" + userid).style.backgroundColor = "rgba(255, 255, 255, 0.1)"
      showDetails(userid)
    }
  }

  let showDetails = function(userid) {
    mapFactory.user.get({id: userid})
      .$promise
      .then( function(response) {
        $scope.kingdom = response.user.kingdom
        $scope.troopsNum = response.troops.length
        $scope.troops = response.troops
        isMine(response.buildings)
        isFactory(response.buildings)
        isAcademy(response.buildings)
        stationLevel(response.buildings)
        console.log(response, "enemyresponse")
      })
      .catch( function(error) {
        console.log(error);
      })

    $scope.showEnemy = true
    //clickOut()
  }

  $scope.showTroops = false
  $scope.attack = function(id, kingdom) {
    console.log(id, "attack")
    $scope.getTroops(id, kingdom)
  }

    let attackerTroops = []

  $scope.getTroops = function(defenderId, defenderKingdom) {

    let defenderTroops
    let attackerId = $localStorage.userObj.userId

    mapFactory.search.query({kingdom: defenderKingdom})
      .$promise
      .then( function(response) {
        defenderTroops = response[0].troops
        console.log(defenderTroops, "deftroop");
      })
      .catch( function(error) {
        console.log(error);
      })

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
        $scope.startBattle(attackerId, defenderId, defenderTroops)
      })
  }

  $scope.selectTroop = function(troopId){
      console.log("select troop");
      attackerTroops.push(troopId)
      document.querySelector(".troop" + troopId).style.border = "2px solid red"
  }

  $scope.startBattle = function(attackerId, defenderId, defenderTroops) {
    console.log(attackerTroops, "attackertroops");
    let attackData = {
      "attackerTroops" : attackerTroops,
      "attackerId" : attackerId,
      "defenderTroops" : defenderTroops,
      "defenderId" : defenderId
    }
    console.log(attackData, "attackdata");
    mapFactory.attack.save(attackData)
      .$promise
      .then(function(response) {

      })
      .catch( function(error) {
        console.log(error);
      })
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
    $scope.mineNum = mines.length
  }

  let isFactory = function(building) {
    let factories = building.filter(function(elem){
      return elem.type === "farm"
    })
    $scope.factoryNum = factories.length
  }

  let isAcademy = function(building) {
    let academies = building.filter(function(elem){
      return elem.type === "barracks"
    })
    $scope.academyNum = academies.length
  }

  let stationLevel = function(building) {
    let station = building.filter(function(elem){
      return elem.type === "townhall"
    })
    $scope.stationLevel = station[0].level
  }



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
//          console.log(result, "result")
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


//ADD NEW BUILDING bad request
  // $scope.addNewMine = function() {
  //   var postData = {
  //     "user_id": String($localStorage.userObj.userId),
  //     "type": "mine"
  //   };
  //   mapFactory.building.save(postData)
  //     .$promise.then( function (response) {
  //       console.log(response);
  //     })
  //     .catch( function(error) {
  //       console.log(error);
  //     });
  // }
  //
  //
  // $scope.addNewFactory = function() {
  //   var postData = {
  //     "user_id": String($localStorage.userObj.userId),
  //     "type": "farm"
  //   };
  //   mapFactory.building.save(postData)
  //     .$promise.then( function (response) {
  //       console.log(response);
  //     })
  //     .catch( function(error) {
  //       console.log(error);
  //     });
  // }
  //
  // $scope.addNewAcademy = function() {
  //   var postData = {
  //     "user_id": String($localStorage.userObj.userId),
  //     "type": "barracks"
  //   };
  //   mapFactory.building.save(postData)
  //     .$promise.then( function (response) {
  //       console.log(response);
  //     })
  //     .catch( function(error) {
  //       console.log(error);
  //     });
  // }




}]);
