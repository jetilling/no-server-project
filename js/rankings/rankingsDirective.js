angular.module('kittenRate').directive('rankingsDirective', function(){
  return {
    restrict: 'AE',
    templateUrl: './views/directives/rankingsDirective.html',
    scope: {
      kitten: '=',
      //test: '='
    },
    controller: function($scope, service){
      $scope.kittens = service.savedKittens();
    },
    link: function(scope, element, attrs){
      // scope.test= "hello"
    }
  }
})
