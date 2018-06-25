function UsersShowCtrl($scope, $http, $state){
  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  })
    .then( res => $scope.user = res.data);

  $scope.deleteUser = function(){
    $http({
      method: 'DELETE',
      url: `api/favours/${$state.params.id}`
    })
      .then(() => $state.go('favourIndex'));
  };
}

export default UsersShowCtrl;
