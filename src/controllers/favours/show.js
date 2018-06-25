function FavoursShowCtrl($scope, $http, $state) {

  $scope.isVolunteer = false;

  $http({
    method: 'GET',
    url: `api/favours/${$state.params.id}`
  })
    .then(res => {
      $scope.favour = res.data;
      // console.log($scope.isVolunteer, 'after res.data');
    })
    .then(() => {
        // $scope.favour.volunteer.forEach(volunteer => {
        //   if(volunteer._id === currentUser) $scope.isVolunteer = true;
        // });
      // });
      //   console.log(volunteer);
      //   console.log($scope.currentUser);
      // console.log($scope.isVolunteer, 'after forEach');
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
