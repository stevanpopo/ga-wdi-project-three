function FavoursShowCtrl($scope, $http, $state) {
  $http({
    method: 'GET',
    url: `api/favours/${$state.params.id}`
  })
    .then(res => $scope.favour = res.data);

  $scope.deleteFavour = function(){
    $http({
      method: 'DELETE',
      url: `api/favours/${$state.params.id}`
    })
      .then(() => $state.go('favourIndex'));
  };
}

export default FavoursShowCtrl;
