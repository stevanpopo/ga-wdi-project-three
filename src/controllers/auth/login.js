function AuthLoginCtrl($scope, $auth, $state, $rootScope) {
  $scope.data = {};

  $scope.handleSubmit = function() {
    $auth.login($scope.data)
      .then(res => {
        console.log(res.status);
        $state.go('favourIndex');
        $scope.setCurrentUser();
        // $rootScope.$broadcast('loggedIn', res.data.user);
      })
      .catch($rootScope.$broadcast('flashMessage', {
        type: 'warning',
        content: 'Invalid login details. Please try again'
      }));
  };
}

export default AuthLoginCtrl;
