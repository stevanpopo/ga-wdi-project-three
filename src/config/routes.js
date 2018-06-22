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
    });

  $urlRouterProvider.otherwise('/');
}

export default Router;
