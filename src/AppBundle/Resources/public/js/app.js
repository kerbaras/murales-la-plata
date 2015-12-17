var muralesLaPlata = angular.module('MuralesLaPlata', ['ngMaterial']);

.config([
  '$mdThemingProvider',
  function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('pink');

    
  }
]);
