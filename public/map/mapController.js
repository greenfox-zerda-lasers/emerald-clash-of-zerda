angular.module("ClashApp").controller("MapController", ['$scope', '$http', '$location', '$route', function($scope, $http, $location, $route){

  var svg = document.querySelector("svg")
  console.log(svg, "1")

  var board = [

        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
  ]

  var addTile = function() {
    svg.innerHTML += "<g class='tile' transform='scale(0.5, 0.5) translate(1300, 0)'><polygon class='st3' points='150.2,0 0.1,85.3 150,170.5 300,85.3 '/><polygon class='st4' points='0.1,85.3 0,95.1 150,180 150,170.5'/><polygon class='st5' points='300,85.3 300,94.7 150,180 150,170.5 '/></g>";
  }
  addTile()






}]);
