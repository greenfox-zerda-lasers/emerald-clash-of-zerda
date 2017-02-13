angular
  .module("ClashApp")
  .factory("UserFactory",
    function($localStorage, $location) {
      return {
        loggedIn: function() {
          if ($localStorage.userObj.token === false) {
            return false;
          } else {
            return true;
          };
        }
      }
    });
