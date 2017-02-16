angular
  .module("ClashApp")
  .factory("BroadcastFactory",
    function($rootScope) {
      return {
        events: {
          building: null,
          troop: null,
        },

        state: {
          building: false,
        },

        pushTobuildings: function(response) {
          this.events.building = {id: response.id, timestamp: new Date().getTime()+500};
          console.log(this.events.building);
        },

        buildingRegister: function() {
          this.state.building = true;
          let left = 0;
          let duration = this.events.building.timestamp - new Date().getTime();
          console.log(duration);

          let animation = () => {
            left++;
            let current = left / duration * 100;

            if(current < 100) {
              requestAnimationFrame(animation);
            } else {
              this.state.building = false;
            };
            $rootScope.$broadcast('BuildingReg', current);

          };
          console.log(this.state.building);
          animation();
        },
      }
});
