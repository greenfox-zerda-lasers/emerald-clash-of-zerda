angular
  .module("ClashApp")
  .factory("BroadcastFactory",
    function($rootScope) {
      return {
        events: {
          building: null,
          troop: null,
        },

        pushTobuildings: function(response) {
          this.events.building = {id: response.id, timestamp: new Date().getTime()+30000};
          console.log(this.events.building);
        },

        buildingRegister: function() {
          let bar = document.querySelector('.bar');
          let left = 0;
          let duration = this.events.building.timestamp - new Date().getTime();

          let animation = function () {
            left++;
            let current = left / duration * 100;
            bar.style.width = current + '%';

            if(current < 100) {
              requestAnimationFrame(animation)
            };
          };

          animation();

          // setTimeout(() => {
          //   $rootScope.$broadcast('BuildingReg', `${this.events.building.id} is LIVE`);
          // }, 3000);

        },


      }
});
