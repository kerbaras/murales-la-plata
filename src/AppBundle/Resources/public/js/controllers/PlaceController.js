muralesLaPlata.controller('PlaceController', [
  '$scope',
  '$stateParams',
  'PlaceService',
  function ($scope, $stateParams, PlaceService) {
    PlaceService.get($stateParams.id).then(function(mural){
      $scope.mural = mural;
    }, function (error) {
      $scope.error = "No se encontró el Mural";
    });
  }
]);
