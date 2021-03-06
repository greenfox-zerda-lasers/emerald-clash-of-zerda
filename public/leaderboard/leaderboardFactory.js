/**
 * Leaderboard factory
 * @desc Handles API of the Leaderboard
 * @author Bencso
 */

angular
  .module("ClashApp")
  .factory("LeaderboardFactory",
    function($resource, $localStorage, ConfigFactory) {
      return $resource(`${ConfigFactory.apiURL}leaderboard`);
});
