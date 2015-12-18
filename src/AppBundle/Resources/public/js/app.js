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
      })
      .state('main', {
        abstract: true,
        templateUrl: "dist/templates/layout.html",
        controller: "MainController"
      })
      .state('main.places', {
        url: "/places",
        abstract: true,
        templateUrl: "dist/templates/places.html",
      })
      .state('main.places.list', {
        url: "/",
        templateUrl: "dist/templates/list.html",
        controller: "PlacesListController"
      })
      .state('main.places.place', {
        url: "/:placeid",
        templateUrl: "dist/templates/place.html",
        controller: "PlaceController"
      })
      .state('main.about', {
        url: "/about",
        templateUrl: "dist/templates/about.html",
      });

    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBftV0TYpM5bF7Wp3jzg9WphM75OrlUck8',
        v: '3.20',
        libraries: 'geometry,visualization'
    });
  }
]);
