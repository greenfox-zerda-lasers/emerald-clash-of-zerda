
angular.module("ClashApp").controller("MapController", ['$scope', '$http', '$localStorage', '$location', '$resource', 'mapFactory', function($scope, $http, $localStorage, $location, $resource, mapFactory){


  let getKingdoms = (function() {
    mapFactory.search.query()
      .$promise
      .then( function(response) {
        $scope.kingdoms = []
        response.forEach(function(elem) {
          $scope.kingdoms.push(elem.user.id)
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
            //viewBox: [0, 0, 500, 400]
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
        this.setPosition()
        this.renderMine()
        this.renderFactory()
        this.renderAcademy()
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


    setPosition() {
      var object = document.querySelector('#kingdom'+this.id)
      var xPos = Math.random() * 20000
      var yPos = Math.random() * 15000
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


  $scope.show = false

  $scope.showDetails = function(userid) {
    mapFactory.user.get({id: userid})
      .$promise
      .then( function(response) {
        $scope.kingdom = response.user.kingdom
        $scope.troopsNum = response.troops.length
        $scope.troops = response.troops

      }.bind(this))
      .catch( function(error) {
        console.log(error);
      })
    $scope.show = true
    window.addEventListener("click", function(event) {
      $scope.show = false
    })
  }

//ADD NEW BUILDING bad request
  $scope.addNewMine = function() {
    var postData = {
      "user_id": String($localStorage.userObj.userId),
      "type": "mine"
    };
    mapFactory.building.save(postData)
      .$promise.then( function (response) {
        console.log(response);
      })
      .catch( function(error) {
        console.log(error);
      });
  }


  $scope.addNewFactory = function() {
    var postData = {
      "user_id": String($localStorage.userObj.userId),
      "type": "farm"
    };
    mapFactory.building.save(postData)
      .$promise.then( function (response) {
        console.log(response);
      })
      .catch( function(error) {
        console.log(error);
      });
  }

  $scope.addNewAcademy = function() {
    var postData = {
      "user_id": String($localStorage.userObj.userId),
      "type": "barracks"
    };
    mapFactory.building.save(postData)
      .$promise.then( function (response) {
        console.log(response);
      })
      .catch( function(error) {
        console.log(error);
      });
  }



  //scroll to kingdom
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



//background scroll
  window.addEventListener('scroll', function() {
    var bg = document.querySelector("#map")
    var positionY = window.pageYOffset/20
    var positionX = window.pageXOffset/20
    bg.style.backgroundPosition = positionX + "px " + positionY + "px"
  })


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







}]);



///////////////////////////////

// var canvas = document.querySelector("object")
//
// function Kingdom() {
//     this.rootNode = document.createElement('svg');
//     canvas.appendChild(this.rootNode)
//     this.snap = new Snap(this.rootNode)
//     this.mineSVG = null;
//
//     this.init = function() {
//
//     }

//     this.animate = function(){
//        var academy = snap.select()
//        academy.x = Math.sin(time) * 10 + px
//        window.requestAnimationFrame( this.animate )
//     }

//     this.onDrop = function() {
//       // send ajax
//     }
//
//     this.addMine = function() {
//
//     }
//
//     this.load = function() {
//       Snap.load("img/map/floor1.svg", this.onSvgLoad );
//     }
//
//     this.onSvgLoad = function ready(fragment) {
//         this.mineSVG = fragment.keressmeg//
//     }
// }
