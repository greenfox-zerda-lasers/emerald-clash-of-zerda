'use strict';

describe('Testing WelcomeController', function () {
  var WelcomeController;
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
      // $httpBackend.when('GET', 'http://localhost:8000/0/buildings').respond(200);
      WelcomeController = $controller('WelcomeController', {$scope: scope});
      scope.$digest();
      element = $templateCache.get('public/welcome/welcome.html');
      compiledElement = compile(element)(rootscope);
      console.log("welcome controller", WelcomeController);
    });
  });

  describe('xxx', function () {
    it('WelcomeController should be defined', function () {
      expect(WelcomeController).toBeDefined();
    });

    it('gotToGame should be defined', function () {
      console.log("defike", WelcomeController.goToGame);
      expect(WelcomeController.goToGame).toBeDefined();
    });

    // it('gotToGame function returns to the map page', function () {
    //   expect()
    // });
  });
});
