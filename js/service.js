angular.module('kittenRate').service('service', function($http){

  var savedKittens = [];

//get kittens from JSON
  this.getKittens = function(){
    return $http.get('./kittens.json');
  }

  //get kittens from savedKittens
  this.savedKittens = function(){
    return savedKittens
  }

//function to push saved kitten into saveKitten array.
  this.saveKitten = function(saveKitten){
    savedKittens.push(saveKitten)
    
  }


})
