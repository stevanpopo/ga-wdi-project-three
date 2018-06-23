function UsersIndexCtrl($scope, $http){
  $http({
    method: 'GET',
    url: '/api/users'
  })
    .then(res => $scope.users = res.data)
    .then(console.log($scope.users));
}

export default UsersIndexCtrl;
