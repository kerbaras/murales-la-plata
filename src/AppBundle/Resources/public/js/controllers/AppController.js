muralesLaPlata.controller('AppController', [
  '$scope',
  '$mdSidenav',
  '$location',
  function ($scope, $mdSidenav, $location) {

    $scope.menuItems = [
      { name:"Inicio", icon: "home", url:"/" },
      { name:"Murales", icon: "view_quilt", url:"/murales/" },
      { name:"Nosotros", icon: "info", url:"/about" },
    ];

    $scope.toggleSidebar = function() {
      $mdSidenav('left').toggle()
    };

    $scope.go = function ( path ) {
      $mdSidenav('left').toggle();
      $location.path( path );
    };
  }
]);
