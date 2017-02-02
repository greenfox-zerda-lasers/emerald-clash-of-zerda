angular
  .module("ClashApp")
  .factory("MenuFactory",
    function($resource, $localStorage) {
      return $resource(
        'http://localhost:8000/kingdom/:id/resources',
        {id: $localStorage.userObj.userId, troopId: "@troopId"}
      )
});
