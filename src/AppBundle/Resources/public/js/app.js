var muralesLaPlata = angular.module('MuralesLaPlata', ['ngMaterial', 'ui.router', 'uiGmapgoogle-maps', 'angular-carousel']);

muralesLaPlata.config([
  '$mdThemingProvider',
  '$stateProvider',
  '$urlRouterProvider',
  'uiGmapGoogleMapApiProvider',
  function($mdThemingProvider, $stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('pink');

    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "/dist/templates/home.html",
        controller: "HomeController"
      })
      .state('main', {
        abstract: true,
        templateUrl: "/dist/templates/layout.html",
        controller: "MainController"
      })
      .state('places', {
        parent: 'main',
        url: "/murales",
        abstract: true,
        templateUrl: "/dist/templates/places.html",
        controller: "PlacesController"
      })
      .state('placesList', {
        parent: 'places',
        url: "/",
        templateUrl: "/dist/templates/listPlaces.html",
        controller: "PlacesListController"
      })
      .state('place', {
        parent: 'places',
        url: "/{id:int}",
        templateUrl: "/dist/templates/place.html",
        controller: "PlaceController"
      })
      .state('about', {
        parent: 'main',
        url: "/about",
        templateUrl: "/dist/templates/about.html",
        controller: "AboutController"
      });

    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBftV0TYpM5bF7Wp3jzg9WphM75OrlUck8',
        v: '3.20',
        libraries: 'geometry,visualization'
    });
  }
]);
