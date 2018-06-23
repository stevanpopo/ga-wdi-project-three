function FavoursNewCtrl($scope, $http, $state) {
  $scope.data = {};

  $scope.createFavour = function() {
    $http({
      method: 'POST',
      url: '/api/favours',
      data: $scope.data
    })
      .then(() => $state.go('favourIndex'));
  };
}

export default FavoursNewCtrl;
