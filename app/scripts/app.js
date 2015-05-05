'use strict';

/**
 * @ngdoc overview
 * @name likeTapApp
 * @description
 * # likeTapApp
 *
 * Main module of the application.
 */
angular
  .module('likeTapApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider,$mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange');
    $routeProvider
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
          })
        .when('/dashboard', {
                    templateUrl: 'views/dashboard.html',
                    controller: 'DashboardCtrl'
                  })
      .otherwise({
        redirectTo: '/login'
      });
  });
