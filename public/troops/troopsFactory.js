angular
  .module("ClashApp")
  .factory("TroopsFactory",
    function($resource, $localStorage, ConfigFactory) {
      return $resource(
        `${ConfigFactory.apiURL}kingdom/:id/troops/:troopId`,
        {id: $localStorage.userObj.userId, troopId: "@troopId"},
        {
          'update': { method:'PUT' },
          troopId: "@id"
        }
      )
});
