angular
  .module("ClashApp")
  .controller("MenuController", ['$scope', '$http', '$location', '$localStorage', 'MenuFactory', '$rootScope',
    function($scope, $http, $location, $localStorage, MenuFactory, $rootScope) {

  $scope.username = $localStorage.userObj.username;

  let menuOverlay = (function() {
    let button = document.querySelector(".activeScreen")
    let options = document.querySelectorAll(".option")
    let overlay = document.querySelector(".overlay")
    button.addEventListener("mouseover", function(event) {
      // button.style.width = "90px"
      // button.style.height = "90px"
      options.forEach(function(elem) {
        elem.style.opacity = "1"
      })
      overlay.addEventListener("mouseout", function(event) {
        console.log("out");
        button.style.width = "75px"
        button.style.height = "75px"
        options.forEach(function(elem) {
          elem.style.opacity = "0"
        })
      })
    })
  })()


  let options = document.querySelectorAll(".option")

  let setScreenPaths = (function() {
    let screens = ['map', 'overview', 'buildings', 'troops', 'leaderboard', 'history']
    let button = document.querySelector(".activeScreen")
    let path = String($location.absUrl())
    console.log(path);
    for(var i = 0; i <screens.length; i++) {
      if(path.includes(screens[i]) ) {
        button.style.backgroundImage = 'url(' + './img/icons/' + screens[i] + '_icon-01.svg' + ')'
        screens.splice(i, 1)
      }
    }
    options.forEach(function(elem, index){
      elem.style.backgroundImage = 'url(' + './img/icons/' + screens[index] + '_icon-01.svg' + ')'
      elem.id  =  "button" + screens[index]
    })
  })()

  $scope.goToScreen = function(event){
    let screen = event.target.id
    let path = screen.slice(6)
    $location.path('/' + path)
  }

  $scope.closeMenu = function() {
    options.forEach(function(elem){
      elem.style.opacity = "0"
      //mouseout-ra ujra elojon! javitani!!
      //+ window eventlistener
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
