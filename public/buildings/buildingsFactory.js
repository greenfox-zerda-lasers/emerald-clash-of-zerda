/**
 * Building factory
 * @desc Handles API of buildings
 * @author Bencso
 */

angular
  .module("ClashApp")
  .factory("BuildingsService",
    function($resource, $localStorage) {
      return $resource('http://localhost:8000/kingdom/:id/buildings/:building_id',
        {id: $localStorage.userObj.userId, building_id: "@building_id"},
        {
          "update": { method: 'PUT'}
        }
    );
});
