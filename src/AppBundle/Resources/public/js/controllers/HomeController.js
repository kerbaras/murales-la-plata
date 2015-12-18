muralesLaPlata.controller('HomeController', [
  '$scope',
  '$location',
  'PlaceService',
  function ($scope, $location, PlaceService) {

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

    $scope.selectedItemChange = function (place) {
      $location.path('/places/' + place.id);
    };

    $scope.searchTextChange = function (text) {

    };

    $scope.querySearch = function (query) {
      return query ? self.states.filter( createFilterFor(query) ) : self.states;
    }
  }
]);
