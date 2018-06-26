function UsersIndexCtrl($scope, $http){
  $http({
    method: 'GET',
    url: '/api/users'
  })
    .then(res => {
      $scope.users = res.data.sort((a, b) => {
        return  b.points - a.points;
      });
      console.log($scope.users,'first');
    });
}

export default UsersIndexCtrl;
