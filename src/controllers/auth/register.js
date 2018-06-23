function AuthRegisterCtrl($scope, $auth, $state) {
  $scope.data = {};

  $scope.handleSubmit = function() {
    console.log('In the submit');
    $auth.signup($scope.data)
      // Needs to be updated so redirects to login once login view setup
      .then(() => $state.go('home'));
  };
}

export default AuthRegisterCtrl;
