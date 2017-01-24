angular.module("ClashApp").factory("BuildingsService", function($resource) {
  var buildings = $resource('http://localhost:8000/kingdom/:id/buildings/', {id: 0});

  var buildings = "epulet";
  return buildings;
})
