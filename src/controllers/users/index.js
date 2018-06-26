function UsersIndexCtrl($scope, $http){
  $http({
    method: 'GET',
    url: '/api/users'
  })
    .then(res => {
      $scope.usersTopFive = res.data.sort((a, b) => {
        console.log($scope.usersTopFive);
        return  b.points - a.points;
      });
      console.log($scope.usersTopFive,'users ordered');
    });
}

export default UsersIndexCtrl;
