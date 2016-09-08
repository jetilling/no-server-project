angular.module('kittenRate').directive('kittenRateDirective', function(){

  return {
    restrict: 'AE',
    templateUrl: './js/kittenRate/kittenRateDirective.html',
    scope: {
      id: '=',
      next: '&',
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
