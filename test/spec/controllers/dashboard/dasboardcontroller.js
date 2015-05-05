'use strict';

describe('Controller: DashboardDasboardcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('likeTapApp'));

  var DashboardDasboardcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashboardDasboardcontrollerCtrl = $controller('DashboardDasboardcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
