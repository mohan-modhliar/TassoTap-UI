'use strict';

describe('Controller: LoginLogincontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('likeTapApp'));

  var LoginLogincontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginLogincontrollerCtrl = $controller('LoginLogincontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
