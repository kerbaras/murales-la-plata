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
            center: {latitude: -34.921330, longitude: -57.954464},
            fotos: [
              'https://scontent-gru2-1.xx.fbcdn.net/hphotos-xpf1/t31.0-8/11834722_693376834130272_8184654035303605941_o.jpg',
              'https://scontent-gru2-1.xx.fbcdn.net/hphotos-xta1/t31.0-8/12052482_712313562236599_6199700457308207354_o.jpg'
            ]
          },
          {
            id: 2,
            nombre: 'Otro titulo',
            descr: 'Una descripcion',
            direccion: 'Calle 10 e/ 55 y 54',
            center: {latitude: -34.920000, longitude: -57.950004},
            fotos: [
              'https://scontent-gru2-1.xx.fbcdn.net/hphotos-xta1/t31.0-8/12027331_712313182236637_6771689211231978128_o.jpg'
            ]
          }
        ]
      });
      return deferred.promise;
    };
  }
]);
