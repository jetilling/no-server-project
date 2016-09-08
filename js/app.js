angular.module('kittenRate', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'homeCtrl',
      templateUrl: './js/home/home.html'
    })
    .state('kittenRate', {
      url: '/kittenRate',
      controller: 'kittenRateCtrl',
      templateUrl: './js/kittenRate/kittenRate.html'
    })
    .state('rankings', {
      url: '/rankings',
      controller: 'rankingsCtrl',
      templateUrl: './js/rankings/rankings.html'
    })
    .state('about', {
      url: '/about/:id',
      controller: 'aboutCtrl',
      templateUrl: './js/about/about.html'
    })

})
