/**
 * History service
 * @desc Handles API of the History
 * @author Bencso
 */

angular
  .module("ClashApp")
  .factory("HistoryFactory",
    function($resource, $localStorage) {
      return $resource('http://localhost:8000/kingdom/:id/battles/:battle_id',
        {id: $localStorage.userObj.userId, battle_id: "@battle_id"}
    );
});
