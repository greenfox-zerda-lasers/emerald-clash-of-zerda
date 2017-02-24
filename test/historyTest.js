'use strict';

describe('Testing HistoryController', function () {
  var HistoryController;
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
      $httpBackend.when('GET', 'http://localhost:8000/kingdom/0/battles/').respond(200);
      HistoryController = $controller('HistoryController', {$scope: scope});
      scope.$digest();
      element = $templateCache.get('public/history/history.html');
      compiledElement = compile(element)(rootscope);
      console.log("history controller", HistoryController);
    });
  });

  describe('xxx', function () {
    it('HistoryController should be defined', function () {
      expect(HistoryController).toBeDefined();
    });
  });

});
