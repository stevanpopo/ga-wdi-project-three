function UsersShowCtrl($scope, $http, $state){
  $http({
    method: 'GET',
    templateUrl: `/api/user/${$state.params.id}`
  })
    .then( res => $scope.user = res.data);
}

export default UsersShowCtrl;
