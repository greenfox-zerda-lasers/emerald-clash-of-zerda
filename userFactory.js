angular
  .module("ClashApp")
  .factory("UserFactory",
    function($localStorage, $location) {
      return {
        loggedIn: function() {
          if ($localStorage.userObj.userId === false) {
            return false;
          } else {
            return true;
          };
        }
      }
  });
