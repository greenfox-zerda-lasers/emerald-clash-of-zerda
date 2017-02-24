angular.module("ClashApp").controller("svgController", ['$scope', '$http', '$localStorage', '$location', '$resource', 'mapFactory',
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




}]);
