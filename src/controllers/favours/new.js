function FavoursNewCtrl($scope, $http, $state) {
  $scope.data = {};

  $scope.enoughPoints = true;

  $scope.checkPoints = function() {
    if ($scope.data.points > $scope.currentUser.points) return $scope.enoughPoints = false;
    else return $scope.enoughPoints = true;
  };

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
