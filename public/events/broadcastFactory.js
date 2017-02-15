angular
  .module("ClashApp")
  .factory("BroadcastFactory",
    function($rootScope) {
      return {
        events: {
          pushTobuildings: function(response) {
            this.buildings.push({id: response.id, timestamp: new Date().getTime()});
            console.log(this.buildings);
          },
          buildings: [],
          tropps: []
        },

        buildingRegister: function() {
          let progress = document.querySelector('.progess');
          let left = 0;
          let max = 100;

          setTimeout(function() {
            $rootScope.$broadcast('BuildingReg', "LIVE");
          }, 3000);
        }


      }
});
