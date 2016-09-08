angular.module('kittenRate').service('service', function($http){

  this.getKittens = function(){
    return $http.get('./kittens.json');
  }
})
