function MainCtrl($scope, $state, $transitions, $auth) {
  $scope.isAuthenticated = $auth.isAuthenticated;
  $scope.navbarOpen = false;
  $scope.currentUser = $auth.getPayload().sub;
  console.log('current user', $scope.currentUser);

  $transitions.onSuccess({}, () => {
    $scope.navbarOpen = false;
    $scope.isHomepage = $state.$current.name === 'home';
  });

  $scope.toggleMenu = function() {
    $scope.navbarOpen = !$scope.navbarOpen;
  };

  $scope.logout = function() {
    $auth.logout();
    $state.go('login');
  };
}

export default MainCtrl;
