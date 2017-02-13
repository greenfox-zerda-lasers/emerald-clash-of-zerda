/**
 * Building factory
 * @desc Handles API of buildings
 * @author Bencso
 */

angular
  .module("ClashApp")
  .factory("BuildingsFactory",
    function($resource, $localStorage, ConfigFactory) {
      return $resource(`${ConfigFactory.apiURL}kingdom/:id/buildings/:building_id`,
        {id: $localStorage.userObj.userId, building_id: "@building_id"},
        {
          "update": { method: 'PUT'}
        },
        {headers: { 'token': $localStorage.userObj.token }}
    );
});
