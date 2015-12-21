var muralesLaPlata = angular.module('MuralesLaPlata', ['ngMaterial', 'ngResource', 'ui.router', 'uiGmapgoogle-maps', 'angular-carousel']);

muralesLaPlata.config([
  '$mdThemingProvider',
  '$stateProvider',
  '$urlRouterProvider',
  'uiGmapGoogleMapApiProvider',
  '$httpProvider',
  function($mdThemingProvider, $stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider, $httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    $mdThemingProvider
      .theme('default')
        .primaryPalette('blue')
        .accentPalette('pink');
    $mdThemingProvider
      .theme('forms-dark', 'default')
        .primaryPalette('yellow')
        .dark();

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
      })
      .state('admin', {
        abstract: true,
        url: "/admin",
        templateUrl: "/dist/templates/admin/layout.html"
      })
      .state('admin_dashboard', {
        parent: 'admin',
        url: '/',
        templateUrl: "/dist/templates/admin/dashboard.html"
      })
      .state('admin_murales', {
        abstract: true,
        parent: 'admin',
        url: "/murales",
        templateUrl: "/dist/templates/admin/murales/layout.html"
      })
      .state('admin_murales_index', {
        parent: 'admin_murales',
        url: "/",
        templateUrl: "/dist/templates/admin/murales/index.html",
        controller: 'AdminMuralesController'
      })
      .state('admin_murales_new', {
        parent: 'admin_murales',
        url: "/new",
        templateUrl: "/dist/templates/admin/murales/new.html",
        controller: 'AdminNewMuralController'
      });

    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyBftV0TYpM5bF7Wp3jzg9WphM75OrlUck8',
      v: '3.20',
      libraries: 'geometry,visualization'
    });
  }
]);
