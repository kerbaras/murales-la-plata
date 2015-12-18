muralesLaPlata.service('PlaceService', [
  '$q',
  function ($q) {
    this.getAll = function () {
      var deferred = $q.defer();
      deferred.resolve({
        data: [
          {
            id: 1,
            nombre: 'Un titulo',
            descr: 'Una descripcion',
            direccion: 'Plaza Moreno (52 y 13)',
            center: {latitude: -34.921330, longitude: -57.954464}
          },
          {
            id: 2,
            nombre: 'Otro titulo',
            descr: 'Una descripcion',
            direccion: 'Calle 10 e/ 55 y 54',
            center: {latitude: -34.920000, longitude: -57.950004}
          }
        ]
      });
      return deferred.promise;
    };
  }
]);
