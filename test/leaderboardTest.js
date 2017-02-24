'use strict';

describe('Testing LeaderboardController', function () {
  var LeaderboardController;
  var compile;
  var scope;
  var rootscope;
  var element;
  var compiledElement;
  var httpBackend;

  beforeEach(function () {
    module('ClashApp', 'templates');

    inject(function ($controller, $httpBackend, _$compile_, _$rootScope_, $templateCache) {
      httpBackend = $httpBackend;
      compile = _$compile_;
      rootscope = _$rootScope_;
      scope = rootscope.$new();
      $httpBackend.when('GET', 'http://localhost:8000/leaderboard').respond(200);
      LeaderboardController = $controller('LeaderboardController', {$scope: scope});
      scope.$digest();
      element = $templateCache.get('public/leaderboard/leaderboard.html');
      compiledElement = compile(element)(rootscope);
      console.log("leaderboard controller", LeaderboardController);
    });
  });

  describe('xxx', function () {
    it('LeaderboardController should be defined', function () {
      expect(LeaderboardController).toBeDefined();
    });
  });

});
