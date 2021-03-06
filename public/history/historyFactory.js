/**
 * History factory
 * @desc Handles API of the History
 * @author Bencso
 */

angular
  .module("ClashApp")
  .factory("HistoryFactory",
    function($resource, $localStorage, ConfigFactory) {
      return $resource(`${ConfigFactory.apiURL}kingdom/:id/battles/:battle_id`,
        {id: $localStorage.userObj.userId, battle_id: "@battle_id"}
    );
});
