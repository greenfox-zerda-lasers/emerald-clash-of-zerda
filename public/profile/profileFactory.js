/**
 * Building factory
 * @desc Handles API of buildings
 * @author Bencso
 */

 angular
  .module("ClashApp")
  .factory("ProfileFactory",
    function($resource, $localStorage, ConfigFactory) {
      return $resource(`${ConfigFactory.apiURL}/kingdom/:id/`,
        {id: $localStorage.userObj.userId}
      );
   });
