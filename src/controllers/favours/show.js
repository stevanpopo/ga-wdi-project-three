function FavoursShowCtrl($scope, $http, $state) {

  $http({
    method: 'GET',
    url: `api/favours/${$state.params.id}`
  })
    .then(res => {
      $scope.favour = res.data;
      console.log($scope.currentUser, 'outside $watch');
      $scope.$watch('currentUser', (userId) => {
        $scope.isVolunteer = false;
        console.log(userId,'inside $watch');
        $scope.favour.volunteer.forEach(volunteer => {
          if(volunteer._id === userId) $scope.isVolunteer = true;
        });
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
