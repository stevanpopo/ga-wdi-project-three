function AuthRegisterCtrl($scope, $auth, $state) {
  $scope.data = {};

  $scope.handleSubmit = function() {
    if(this.form.$invalid) return false;

    $auth.signup($scope.data)
      .then(() => $state.go('login'));
  };
}

export default AuthRegisterCtrl;
