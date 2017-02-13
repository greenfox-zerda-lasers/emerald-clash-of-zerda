angular
  .module("ClashApp")
  .factory("LoginFactory",
    function($resource, $localStorage, ConfigFactory) {
      return $resource(`${ConfigFactory.apiURL}login`);
    });
