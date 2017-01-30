angular
  .module("ClashApp")
  .factory("TroopsService",
    function($resource, $localStorage) {
      return $resource('http://localhost:8000/kingdom/:id/troops/',
        {id: $localStorage.userObj.userId}
    );
});
