angular.module('kittenRate').directive('kittenRateDirective', function(){

  return {
    restrict: 'AE',
    templateUrl: './views/directives/kittenRateDirective.html',
    scope: {
      next: '&',
      saveKitten: '&',
      kitten: '='
    },
    controller: function($scope, service){
      $scope.getKittens = service.getKittens();
    },
    link: function(scope, element, attrs){
        scope.getKittens.then(function(response){
          scope.kittens = response.data
        })

    }
  }



})
