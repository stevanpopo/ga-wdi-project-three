function AuthRegisterCtrl($scope, $auth, $state) {
  $scope.data = {};

  $scope.handleSubmit = function() {
    console.log('In the submit');
    $auth.signup($scope.data)
      .then(() => $state.go('home'));
  };
}

export default AuthRegisterCtrl;
