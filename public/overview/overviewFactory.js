angular
 .module("ClashApp")
 .factory("OverviewFactory",
   function($resource, $localStorage, ConfigFactory) {
     return $resource(`${ConfigFactory.apiURL}kingdom/:id/`,
       {id: $localStorage.userObj.userId}
     );
  });
