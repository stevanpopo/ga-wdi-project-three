function FavoursShowCtrl($scope, $http, $state) {

  $scope.isVolunteer = false;

  $http({
    method: 'GET',
    url: `api/favours/${$state.params.id}`
  })
    .then(res => {
      $scope.res = res.data;
      $scope.res.favour.volunteer.forEach(volunteer => {
        // console.log($scope.favour.favour._id);
        if(volunteer._id === $scope.res.user._id) $scope.isVolunteer = true;
      });
      // check the id against current user and update is volunteer, use ngif on claim favour button
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
      .then(res => $scope.favour = res.data);
    $scope.isVolunteer = true;
  };
}

export default FavoursShowCtrl;
