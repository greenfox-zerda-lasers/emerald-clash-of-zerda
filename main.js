var angular = require('./lib/angular.js');
var ngResource = require('./lib/angular-resource.js');
var ngRoute = require('./lib/angular-route.min.js');
var ngAnimate = require('./lib/angular-animate.min.js');
var ngStorage = require('./lib/ngStorage.js');


var app = require('./app.js');
var userFactory = require('./userFactory.js');
var configFactory = require('./configFactory.js');
var broadcastFactory = require('./public/events/broadcastFactory.js');
var progressService = require('./public/events/progressService.js');

var loginController = require('./public/login/loginController.js');
var loginFactory = require('./public/login/loginFactory.js');
var regController = require('./public/register/regController.js');
var regFactory = require('./public/register/regFactory.js');
var welcomeController = require('./public/welcome/welcomeController.js');
var overviewController = require('./public/overview/overviewController.js');
var overviewFactory = require('./public/overview/OverviewFactory.js');
var buildingsController = require('./public/buildings/buildingsController.js');
var buildingsFactory = require('./public/buildings/buildingsFactory.js');
var historyController = require('./public/history/historyController.js');
var historyFactory = require('./public/history/historyFactory.js');
var leaderboardController = require('./public/leaderboard/leaderboardController.js');
var leaderboardFactory = require('./public/leaderboard/leaderboardFactory.js');
var mapController = require('./public/map/mapController.js');
var mapFactory = require('./public/map/mapFactory.js');
var profileController = require('./public/profile/profileController.js');
var profileFactory = require('./public/profile/profileFactory.js');
var troopsController = require('./public/troops/troopsController.js');
var troopsFactory = require('./public/troops/TroopsFactory.js');
var menuController = require('./public/menu/menuController.js');
var menuFactory = require('./public/menu/menuFactory.js');

var css = require('./sass/main.scss');
var fox1 = require('./img/fox_without_bg.svg');
