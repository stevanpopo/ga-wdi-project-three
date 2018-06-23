function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html'
    })
    .state('favourIndex', {
      url: '/favours',
      templateUrl: './views/favours/index.html',
      controller: 'favourIndexController'
    })
    .state('userIndex', {
      url: '/users',
      templateUrl: './views/users/index.html',
      controller: 'usersIndexCtrl'
    })
    .state('userShow', {
      url: '/users/:id',
      templateUrl: './views/users/show.html',
      controller: 'usersShowCtrl'
    });

  $urlRouterProvider.otherwise('/');
}

export default Router;
