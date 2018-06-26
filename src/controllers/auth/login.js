function AuthLoginCtrl($scope, $auth, $state, $rootScope) {
  $scope.data = {};

  $scope.handleSubmit = function() {
    $auth.login($scope.data)
      .then(res => {
        console.log(res);
        $state.go('favourIndex');
        $scope.setCurrentUser();
        // $rootScope.$broadcast('loggedIn', res.data.user);
      });
  };
}

export default AuthLoginCtrl;
