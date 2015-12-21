muralesLaPlata.controller('HomeController', [
  '$scope',
  '$location',
  'PlaceService',
  function ($scope, $location, PlaceService) {

    PlaceService.getAll().then(function (response) {
      $scope.places = response;
    });

    $scope.mapOptions = {
      center: {latitude: -34.921330, longitude: -57.954464},
      zoom: 15
    };

    $scope.markerOptions = {
      animation: google.maps.Animation.DROP
    };

    $scope.markerClick = function (marker, event, place) {
      $scope.selectedItemChange(place);
    };

    $scope.selectedItemChange = function (place) {
      $location.path('/murales/' + place.id);
    };

    $scope.searchTextChange = function (text) {

    };

    $scope.querySearch = function (query) {
      return query ? self.states.filter( createFilterFor(query) ) : self.states;
    }
  }
]);
