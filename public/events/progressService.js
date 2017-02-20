angular
  .module("ClashApp")
  .service("ProgressService",
    function($rootScope) {
      return class Progress {
          constructor(finishBy, eventName){
            this.eventName = eventName;
            this.complete = false;
            this.startingTime = new Date().getTime();
            this.elapsedTime = 0;
            this.duration = finishBy - new Date().getTime();
            this.animation();
          };

          animation() {
            console.log(this);
            this.elapsedTime = new Date().getTime() - this.startingTime;
            this.percent = this.elapsedTime / this.duration * 100;

            if(this.percent < 100) {
              requestAnimationFrame(this.animation.bind(this));
            } else {
              this.complete = true;
            };
            $rootScope.$broadcast(this.eventName, this.percent);
          };
        }
  });
