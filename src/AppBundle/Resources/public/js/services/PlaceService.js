muralesLaPlata.service('PlaceService', [
  '$resource',
  '$http',
  function ($resource, $http) {
    this.getAll = function () {
      var muralService = $resource('/api/murales/').query();
      return muralService.$promise;
    };

    this.get = function (id) {
      var muralService = $resource('/api/murales/:id')
        .get({ "id": id });
      return muralService.$promise;
    };

    this.create = function (mural) {
      return
        $http({
          method: 'GET',
          url: '/api/murales/',
          data : mural
        });
    };

    this.update = function (id) {
      var muralService = $resource('/api/murales/:id', null, {
        update : { method:'PUT' }
      })
        .update({ "id": id });
      return muralService.$promise;
    };
  }
]);
