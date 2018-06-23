function UsersIndexCtrl($scope, $http){
  $http({
    method: 'GET',
    templateUrl: '/api/users/'
  })
    .then(res => $scope.users = res.data);
}

export default UsersIndexCtrl;
