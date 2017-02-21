angular
  .module("ClashApp")
  .factory("UserFactory",
    function($http, $localStorage, $location) {
      $http.defaults.headers.common['Authorization'] = $localStorage.userObj.token;
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
