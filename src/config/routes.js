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
    .state('userShow', {
      url: '/users/:id',
      templateUrl: './views/users/show.html',
      controller: 'usersShowCtrl'
    });

  $urlRouterProvider.otherwise('/');
}

export default Router;
