muralesLaPlata.controller('MainController', [
  '$scope',
  '$mdSidenav',
  function ($scope, $mdSidenav) {
    $scope.toggleSidebar = function() {
      $mdSidenav('left').toggle()
    };
  }
]);
