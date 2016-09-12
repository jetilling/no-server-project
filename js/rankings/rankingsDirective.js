angular.module('kittenRate').directive('rankingsDirective', function(){
  return {
    restrict: 'AE',
    templateUrl: './views/directives/rankingsDirective.html',
    scope: {
      kitten: '=',

    },
    controller: function($scope, service){
      $scope.kittens = service.savedKittens();
    },
    link: function(scope, element, attrs){


      $(".kitten").flip();

    }
  }
})
