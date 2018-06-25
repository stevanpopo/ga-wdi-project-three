function UsersEditCtrl($scope, $http, $state){
  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}/edit`
  })
    .then( res => $scope.user = res.data);
}

export default UsersEditCtrl;
