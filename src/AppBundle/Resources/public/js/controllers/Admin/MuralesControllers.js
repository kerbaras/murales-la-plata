muralesLaPlata.controller('AdminMuralesController', [
  '$scope',
  '$location',
  '$state',
  'PlaceService',
  '$http',
  '$mdDialog',
  function($scope, $location, $state, PlaceService, $http, $mdDialog) {

    PlaceService.getAll().then(function(response) {
      $scope.murales = response;
    });

    $scope.new = function () {
      $state.go('admin_murales_new');
    };

    $scope.remove = function (mural) {
      var confirm = $mdDialog.confirm()
        .title("Eliminar Mural")
        .textContent("¿Esta seguro de querer eliminar el mural " + mural.name + "?")
        .ok("Eliminar!")
        .cancel("Cancelar");

      $mdDialog
          .show( confirm )
          .then( function (response) {
            $http.delete('/api/murales/' + mural.id)
              .then(function (response) {
                PlaceService.getAll().then(function(response) {
                  $scope.murales = response;
                });
              },function (error) {
                alert("error");
              });
          })
          .finally(function() {
            confirm = undefined;
          });
    };

    $scope.go = function(id) {
      $location.path('/murales/' + id);
    };
  }
]);


muralesLaPlata.controller('AdminNewMuralController', [
  '$scope',
  '$state',
  'PlaceService',
  '$http',
  '$mdDialog',
  function($scope, $state, PlaceService, $http, $mdDialog) {

    $scope.mural = {
      name: '',
      description: '',
      address: '',
      center: {
        latitude: -34.921330,
        longitude: -57.954464
      },
      photos: []
    }

    $scope.marker = {
      options: {
        animation: google.maps.Animation.DROP,
        draggable: true,
        title: 'Donde estoy?'
      },
      events : {

      }
    };

    $scope.mapOptions = {
      center: {latitude: -34.921330, longitude: -57.954464},
      zoom: 15
    };

    $scope.submit = function () {

      $http({
        method: 'POST',
        url: '/api/murales/',
        data : $scope.mural
      }).then(function (data) {
        $state.go('admin_murales_index');
      }, function (error) {

      });
    };

    $scope.cancel = function () {
      $state.go('admin_murales_index');
    };

    $scope.onPhotoKeyPress = function (event) {
      if(event.keyCode === 13){
        if($scope.mural.photos.indexOf($scope.photoTmp) === -1){
          $scope.mural.photos.push($scope.photoTmp);
        }
        $scope.photoTmp = '';
        console.log($scope.mural.photos);
      }
    };

    $scope.removePhoto = function (id) {
      $scope.mural.photos.splice(id, 1);
    };
  }
]);
