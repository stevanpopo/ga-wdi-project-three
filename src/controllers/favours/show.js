function FavoursShowCtrl($scope, $http, $state) {
  $http({
    method: 'GET',
    url: `api/favours/${$state.params.id}`
  })
    .then(res => $scope.favour = res.data);
}

export default FavoursShowCtrl;
