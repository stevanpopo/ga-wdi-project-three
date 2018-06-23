function MainCtrl($scope, $state, $transitions) {
  $scope.test = 'test';
  $scope.navbarOpen = false;

  $transitions.onSuccess({}, () => {
    $scope.navbarOpen = false;
    $scope.isHomepage = $state.$current.name === 'home';
  });

  $scope.toggleMenu = function() {
    $scope.navbarOpen = !$scope.navbarOpen;
  };
}

export default MainCtrl;
