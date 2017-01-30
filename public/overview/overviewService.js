/**
* Overview service
* @desc Handles API of overview
* @author Bencso
*/

angular
 .module("ClashApp")
 .factory("OverviewService",
   function($resource, $localStorage) {
     return $resource('http://localhost:8000/kingdom/:id/',
       {id: $localStorage.userObj.userId}
   );
});
