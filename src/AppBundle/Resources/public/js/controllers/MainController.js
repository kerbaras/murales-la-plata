muralesLaPlata.controller('MainController', [
  '$scope',
  function ($scope) {

    $scope.share = {
      isOpen: false,
      items: [
        { nombre:'Facebook', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg', color: '#3C5A99' },
        { nombre:'Twitter', img: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Twitter_bird_logo_2012.svg' },
      ]
    };
  }
]);
