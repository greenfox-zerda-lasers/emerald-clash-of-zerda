/**
 * Building factory
 * @desc Handles API of buildings
 * @author Bencso
 */

 angular
  .module("ClashApp")
  .factory("ProfileFactory",
    function($resource, $localStorage) {
      return $resource('http://localhost:8000/kingdom/:id/',
        {id: $localStorage.userObj.userId}
      );
   });
