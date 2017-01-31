angular
  .module("ClashApp")
  .factory("TroopsService",
    function($resource, $localStorage) {
      return $resource(
        'http://localhost:8000/kingdom/:id/troops/:troopId',
        {id: $localStorage.userObj.userId, troopId: "@troopId"},
        {
          'update': { method:'PUT' },
          troopId: "@id"
        }
      )
});
