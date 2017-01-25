angular.module("ClashApp").factory("BuildingsService", function($resource, $localStorage) {

  var getBuildingsByUserId = $resource('http://localhost:8000/kingdom/:id/buildings/', {id: $localStorage.userObj.userId});
  return buildings;

});
