angular
  .module("ClashApp")
  .factory("MenuFactory",
    function($resource, $localStorage, ConfigFactory) {
      return $resource(
        `${ConfigFactory.apiURL}kingdom/:id/resources`,
        {id: $localStorage.userObj.userId, troopId: "@troopId"}
      )
});
