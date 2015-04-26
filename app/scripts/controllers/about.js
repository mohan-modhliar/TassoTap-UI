'use strict';

/**
 * @ngdoc function
 * @name likeTapApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the likeTapApp
 */
angular.module('likeTapApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
