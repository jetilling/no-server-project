angular.module('kittenRate', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'homeCtrl',
      templateUrl: './views/home.html'
    })
    .state('kittenRate', {
      url: '/kittenRate',
      controller: 'kittenRateCtrl',
      templateUrl: './views/kittenRate.html'
    })
    .state('rankings', {
      url: '/rankings',
      controller: 'rankingsCtrl',
      templateUrl: './views/rankings.html'
    })
    .state('about', {
      url: '/about/:id',
      controller: 'aboutCtrl',
      templateUrl: './views/about.html'
    })

})
