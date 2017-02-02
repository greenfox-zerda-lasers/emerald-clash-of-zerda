/**
 * Login factory
 * @desc Handles API of the Login
 * @author Bencso
 */

angular
  .module("ClashApp")
  .factory("LoginFactory",
    function($resource, $localStorage) {
      return $resource('http://localhost:8000/login');
});
