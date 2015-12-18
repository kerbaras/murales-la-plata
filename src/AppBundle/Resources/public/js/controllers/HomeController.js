muralesLaPlata.controller('HomeController', [
  '$scope',
  'PlaceService',
  function ($scope, PlaceService) {

    PlaceService.getAll().then(function (response) {
      $scope.places = response.data;
    });

    $scope.mapOptions = {
      center: {latitude: -34.921330, longitude: -57.954464},
      zoom: 14
    };

    $scope.markerOptions = {
        animation: google.maps.Animation.DROP
      };

    $scope.log = function (ob) {
      console.log(ob);
    }
  }
]);
