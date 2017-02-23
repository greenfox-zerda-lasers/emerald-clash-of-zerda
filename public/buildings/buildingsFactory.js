/**
 * Building factory
 * @desc Handles API of buildings
 * @author Bencso
 */

angular
  .module("ClashApp")
  .factory("BuildingsFactory",
    function($resource, $localStorage, ConfigFactory) {
      return {
        buildings: $resource(`${ConfigFactory.apiURL}kingdom/buildings/`),
        upgrade: $resource(`${ConfigFactory.apiURL}kingdom/buildings/upgrade`),
      }
    });
