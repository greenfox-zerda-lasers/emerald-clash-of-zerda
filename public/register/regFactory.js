/**
 * Registration factory
 * @desc Handles API of the Registration
 * @author Bencso
 */

angular
  .module("ClashApp")
  .factory("RegistrationFactory",
    function($resource, $localStorage, ConfigFactory) {
      return $resource(`${ConfigFactory.apiURL}register`);
});
