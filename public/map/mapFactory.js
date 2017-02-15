angular
 .module("ClashApp")
 .factory("mapFactory",
   function($resource, $localStorage) {
     return {
        user: $resource('http://localhost:8000/kingdom/:id/',
          {id: "@id"}
          //{id: $localStorage.userObj.userId}
        ),
        search: $resource('http://localhost:8000/search?q=:kingdom',
          {kingdom: "@kingdom"}
        ),
        attack: $resource('http://localhost:8000/:id/attack',
          {id: $localStorage.userObj.userId}
        ),
        building: $resource('http://localhost:8000/kingdom/:id/buildings/:building_id',
          {id: $localStorage.userObj.userId, building_id: "@building_id"},
          {
            "update": { method: 'PUT'}
          }
        )
     }


  //atirni ilyenre
//   .module("ClashApp")
//   .factory("mapFactory",
//     function($resource, $localStorage, ConfigFactory) {

//       return {
//         search: $resource(
//           `${ConfigFactory.apiURL}search?q=:kingdom`,
//           {kingdom: "@kingdom"},
//           {
//             'update': { method:'PUT' }
//           }
//         ),
//         attack : $resource(
//           `${ConfigFactory.apiURL}kingdom/:id/attack/`,
//           {id: $localStorage.userObj.userId}
//         )
//       }


});
