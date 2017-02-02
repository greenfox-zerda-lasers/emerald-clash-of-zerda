/**
 * Leaderboard factory
 * @desc Handles API of the Leaderboard
 * @author Bencso
 */

angular
  .module("ClashApp")
  .factory("LeaderboardFactory",
    function($resource, $localStorage) {
      return $resource('http://localhost:8000/leaderboard');
});
