angular
  .module("ClashApp")
  .factory("mapFactory",
    function($resource, $localStorage) {

      return {
        search: $resource(
          'http://localhost:8000/search?q=:kingdom',
          {kingdom: "@kingdom"},
          {
            'update': { method:'PUT' }
          }
        ),
        attack : $resource(
          'http://localhost:8000/kingdom/:id/attack/',
          {id: $localStorage.userObj.userId}
        )


      }

});
