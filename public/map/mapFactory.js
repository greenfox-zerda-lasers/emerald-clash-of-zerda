angular
  .module("ClashApp")
  .factory("mapFactory",
    function($resource, $localStorage, ConfigFactory) {

      return {
        search: $resource(
          `${ConfigFactory.apiURL}search?q=:kingdom`,
          {kingdom: "@kingdom"},
          {
            'update': { method:'PUT' }
          }
        ),
        attack : $resource(
          `${ConfigFactory.apiURL}kingdom/:id/attack/`,
          {id: $localStorage.userObj.userId}
        )


      }

});
