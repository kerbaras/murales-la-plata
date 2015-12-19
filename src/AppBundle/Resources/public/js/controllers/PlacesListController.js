muralesLaPlata.controller('PlacesListController', [
  '$scope',
  '$location',
  'PlaceService',
  function ($scope, $location, PlaceService) {

    PlaceService.getAll().then(function (response) {
      $scope.places = response.data;
    });

    $scope.go = function ( id ) {
      $location.path( '/murales/' + id );
    };
  }
]);
