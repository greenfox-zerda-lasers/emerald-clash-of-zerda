angular
  .module("ClashApp")
  .factory("BroadcastFactory",
    function($rootScope) {
      return {
        buildingRegister: function() {
          setTimeout(function() {
            $rootScope.$broadcast('BuildingReg', "LIVE");
          }, 3000);
        }
      }
});
