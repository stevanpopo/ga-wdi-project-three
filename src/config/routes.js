function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: './views/about.html'
    })
    .state('favourIndex', {
      url: '/favours',
      templateUrl: './views/favours/index.html',
      controller: 'favourIndexController'
    })
    .state('usersIndex', {
      url: '/users',
      templateUrl: './views/users/index.html',
      controller: 'UsersIndexCtrl'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: './views/users/show.html',
      controller: 'UsersShowCtrl'
    });

  $urlRouterProvider.otherwise('/');
}

export default Router;
