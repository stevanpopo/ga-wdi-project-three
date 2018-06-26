function FavoursShowCtrl($scope, $http, $state) {
  $scope.data = {};
  $scope.isOwner = false;
  $scope.canVolunteer = true;

  $scope.canVolunteer = function() {

    return true;
  };

  $scope.addComment = function(){
    $http({
      method: 'POST',
      url: `api/favours/${$state.params.id}/comments`,
      data: $scope.data
    })
      .then(res => $scope.favour = res.data);
  };

  $scope.removeComment = function(comment){
    $http({
      method: 'DELETE',
      url: `api/favours/${$state.params.id}/comments/${comment._id}`,
      data: $scope.data
    })
      .then(res => $scope.favour = res.data);
  };

  $http({
    method: 'GET',
    url: `api/favours/${$state.params.id}`
  })
    .then(res => {
      $scope.favour = res.data;
      if($scope.favour.owner._id === $scope.currentUser) $scope.isOwner = true;
      if(!$scope.isAuthenticated() || $scope.favour.owner._id === $scope.currentUser) return $scope.canVolunteer = false;
      $scope.favour.volunteer.forEach(volunteer => {
        if(volunteer._id === $scope.currentUser) return $scope.canVolunteer = false;
      });
    });

  $scope.deleteFavour = function(){
    $http({
      method: 'DELETE',
      url: `api/favours/${$state.params.id}`
    })
      .then(() => $state.go('favourIndex'));
  };

  $scope.claimFavour = function() {
    $http({
      method: 'POST',
      url: `/api/favours/${$state.params.id}/volunteers`
    })
      .then(res => {
        $scope.favour = res.data;
      });
    $scope.canVolunteer = false;
  };
}

export default FavoursShowCtrl;
