/**
 * Building service
 * @desc Handles API of buildings
 * @author Bencso
 */
 
angular
  .module("ClashApp")
  .factory("BuildingsService",
    function($resource, $localStorage) {
      return $resource('http://localhost:8000/kingdom/:id/buildings/',
        {id: $localStorage.userObj.userId}
    );
});
