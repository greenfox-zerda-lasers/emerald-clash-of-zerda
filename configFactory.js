angular
  .module("ClashApp")
  .factory("ConfigFactory",
    function($localStorage, $location) {
      return {
        checkEnvironment: function() {
          if (document.location.href.includes("herokuapp")) {
            return "https://pacific-bastion-75389.herokuapp.com";
          } else {
            return "http://localhost:3000/";
          };
        }
      }
    });
