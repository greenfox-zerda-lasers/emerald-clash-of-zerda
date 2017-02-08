angular.module("ClashApp").controller("MapController", ['$scope', '$http', '$location', '$route', function($scope, $http, $location, $route){

  var xPos
  var yPos
  var initX = 50
  var initY = 50
  var xChange = 550
  var yChange = 400
  var randomX
  var randomY
  var posCounter = 0
  var kingdoms = 0


  var s = Snap("#svg")

  //s.attr({viewBox:0+","+0+","+1920+","+1080});

  var renderUserKingdom = (function() {
    kingdoms += 1
    Snap.load("img/map/island01.svg", function(f){
      var island = f.select("svg")
      s.append(f)
      //floor.transform("t150, 150")
      //var townhall = f.select("#townhall")

      // var addTownhall = function() {
      //   s.append(townhall)
      //   townhall.transform("t50, 50")
      // }
      //addTownhall()
    })
  })()


  var addKingdom = function() {
    randomX = Math.random() * -1*(Math.random()) * 100
    randomY = Math.random() * -1*(Math.random()) * 100

    if (kingdoms % 3 === 0) {
      xPos = initX + randomX
    } else {
      xPos = initX + randomX +(kingdoms % 3) *xChange
    }
    yPos = initY + randomY + (Math.floor(kingdoms/3) * yChange)
    console.log(kingdoms)
    renderKingdom()
    kingdoms +=1
  }



  var renderKingdom = function() {

    var transformT = "t" + String(xPos) + "," + String(yPos)
    // console.log(transformT)
    //posCounter += 1
    Snap.load("img/map/island01.svg", function(f){
      console.log("load?")
      var floor = f.select("svg")
      s.append(f)
      floor.transform(transformT)
      // var townhall = f.select("#townhall")
      //
      // var addTownhall = function() {
      //   s.append(townhall)
      //   townhall.transform(transformT)
      // }
      // addTownhall()
    })
  }


  addKingdom()
  // addKingdom()
  // addKingdom()
  // addKingdom()
  // addKingdom()
  // addKingdom()

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
//
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
