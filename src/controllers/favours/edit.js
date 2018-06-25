function FavoursEditCtrl($http, $scope, $state) {

  $scope.updateFavour = function() {
    $http({
      method: 'PUT',
      url: `api/favours/${$state.params.id}`,
      data: $scope.data
    })
      .then(() => $state.go('favourShow', { id: $state.params.id }));
  };

  $http({
    method: 'GET',
    url: `api/favours/${$state.params.id}`
  })
    .then(res => {
      $scope.data = res.data;
    });
}

export default FavoursEditCtrl;
