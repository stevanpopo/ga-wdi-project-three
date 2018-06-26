function FavoursShowCtrl($scope, $http, $state) {

  $scope.isVolunteer = false;

  $http({
    method: 'GET',
    url: `api/favours/${$state.params.id}`
  })
    .then(res => {
      $scope.favour = res.data;
      $scope.favour.volunteer.forEach(volunteer => {
        console.log(volunteer._id, 'vol');
        console.log($scope.currentUser,'user');
        if(volunteer._id === $scope.currentUser) $scope.isVolunteer = true;
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
    $scope.isVolunteer = true;
  };
}

export default FavoursShowCtrl;
