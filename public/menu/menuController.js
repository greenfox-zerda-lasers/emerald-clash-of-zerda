angular
  .module("ClashApp")
  .controller("MenuController", ['$scope', '$http', '$location', '$localStorage', 'MenuFactory', '$rootScope',
    function($scope, $http, $location, $localStorage, MenuFactory, $rootScope) {

  $scope.username = $localStorage.userObj.username;

  let options = document.querySelectorAll(".option")
  let button = document.querySelector(".activeScreen")

  let menuOverlay = (function() {
    let overlay = document.querySelector(".menuLeft")
    button.addEventListener("mouseover", function(event) {
      options.forEach(function(elem) {
        elem.style.opacity = "1"
        button.style.width = "100px"
        button.style.height = "100px"
      })
    })
    // overlay.addEventListener("mouseout", function(event) {
    //   console.log("out");
    //   button.style.width = "70px"
    //   button.style.height = "70px"
    //   options.forEach(function(elem) {
    //     elem.style.opacity = "0"
    //   })
    // })
  })()


  let setScreenPaths = (function() {
    let screens = ['map', 'buildings', 'troops', 'leaderboard', 'history']
    let path = String($location.absUrl())

    for(var i = 0; i <screens.length; i++) {
      if(path.includes(screens[i]) ) {
        button.style.backgroundImage = 'url(' + './img/assets/' + screens[i] + '.svg' + ')'
        screens.splice(i, 1)
      }
    }
    options.forEach(function(elem, index){
      elem.style.backgroundImage = 'url(' + './img/assets/' + screens[index] + '.svg' + ')'
      elem.id  =  "button" + screens[index]
    })
  })()

  $scope.goToScreen = function(event){
    console.log("gotoscreen");
    let screen = event.target.id
    let path = screen.slice(6)
    $location.path('/' + path)
  }

  $scope.closeMenu = function() {
    options.forEach(function(elem){
      elem.style.opacity = "0"
      button.style.width = "70px"
      button.style.height = "70px"
    })
  }

  var renderMenuResources = (function() {
    $scope.resources = MenuFactory.query()
      .$promise
      .then(function(result) {
        $scope.food = result[0].amount;
        $scope.gold = result[1].amount;
      }).catch( function(error) {
        console.log(error);
      });
  })();

  $rootScope.$on('sendFood', function(event, args) {
    $scope.food = args
  });
  $rootScope.$on('sendGold', function(event, args) {
    $scope.gold = args
  });

  $scope.logOut = function() {
    $localStorage.userObj = {};
  };

}]);
