angular
  .module("ClashApp")
  .factory("LoginFactory",
    function($resource, $localStorage, ConfigFactory) {
      console.log(`${ConfigFactory.apiURL}/auth`);
      return $resource(`${ConfigFactory.apiURL}login`);
    });
