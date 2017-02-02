/**
 * Registration factory
 * @desc Handles API of the Registration
 * @author Bencso
 */

angular
  .module("ClashApp")
  .factory("RegistrationFactory",
    function($resource, $localStorage) {
      return $resource('http://localhost:8000/register');
});
