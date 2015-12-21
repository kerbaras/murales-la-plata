muralesLaPlata.controller('AppController', [
  '$scope',
  '$mdSidenav',
  '$state',
  function ($scope, $mdSidenav, $state) {

    $scope.menuItems = [
      { name:"Inicio", icon: "home", state:"home" },
      { name:"Murales", icon: "view_quilt", state:"placesList" },
      { name:"Nosotros", icon: "info", state:"about" },
    ];
    $scope.adminMenu = [
      { name:"Dashboard", icon: "dashboard", state:"admin_dashboard" },
      { name:"Murales", icon: "view_quilt", state:"admin_murales_index" },
      { name:"Usuarios", icon: "people", state:"placesList" }
    ];

    $scope.toggleSidebar = function() {
      $mdSidenav('left').toggle()
    };

    $scope.go = function ( state ) {
      $mdSidenav('left').toggle();
      $state.go( state );
    };
  }
]);
