angular
  .module("ClashApp")
  .factory("BroadcastFactory",
    function($rootScope, ProgressService) {
      console.log(ProgressService);
      return {
        events: {
          building: {
            complete: true
          },
          troop: null,
        },

        buildingRegister: function(response) {
          console.log(response);
          let finishing = new Date().getTime()+10000;
          this.events.building = new ProgressService(finishing, 'BuildingReg');
        }
      }
});
