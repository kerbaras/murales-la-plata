var muralesLaPlata = angular.module('MuralesLaPlata', ['ngMaterial', 'ui.router', 'uiGmapgoogle-maps']);

muralesLaPlata.config([
  '$mdThemingProvider',
  '$stateProvider',
  '$urlRouterProvider',
  'uiGmapGoogleMapApiProvider',
  function($mdThemingProvider, $stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('pink');

    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "dist/templates/home.html",
        controller: "HomeController"
      });

    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBftV0TYpM5bF7Wp3jzg9WphM75OrlUck8',
        v: '3.20',
        libraries: 'geometry,visualization'
    });
  }
]);
