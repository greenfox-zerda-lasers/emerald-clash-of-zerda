angular
  .module("ClashApp")
  .factory("mapFactory",
    function($resource, $localStorage) {
      return $resource(
        'http://localhost:8000/search',
        {id: $localStorage.userObj.userId},
        {
          'update': { method:'PUT' }
        }
      )
});
