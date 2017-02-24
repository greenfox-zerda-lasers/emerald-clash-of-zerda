'use strict';

describe('Testing BuildingsController', function () {
  var BuildingsController;
  var compile;
  var scope;
  var rootscope;
  var element;
  var compiledElement;
  var httpBackend;
  var localStorage;

  beforeEach(function () {
    module('ClashApp', 'templates');

    inject(function ($controller, $httpBackend, _$compile_, _$rootScope_, $templateCache, $localStorage) {
      httpBackend = $httpBackend;
      compile = _$compile_;
      rootscope = _$rootScope_;
      scope = rootscope.$new();
      $httpBackend.when('GET', 'http://localhost:8000/0/buildings').respond(200);
      BuildingsController = $controller('BuildingsController', {$scope: scope});
      scope.$digest();
      element = $templateCache.get('public/buildings/buildings.html');
      compiledElement = compile(element)(rootscope);
      console.log("da controller", BuildingsController);
    });
  });

  describe('test', function () {
    it('BuildingsController should be defined', function () {
      expect(BuildingsController).toBeDefined();
    });
  });

});
