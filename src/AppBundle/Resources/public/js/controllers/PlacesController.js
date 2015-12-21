muralesLaPlata.controller('PlacesController', [
  '$scope',
  '$location',
  'PlaceService',
  function ($scope, $location, PlaceService) {

    PlaceService.getAll().then(function (response) {
      $scope.places = response;
    });

    $scope.go = function ( id ) {
      $location.path( '/murales/' + id );
    };
  }
]);
