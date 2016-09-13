angular.module('kittenRate').controller('aboutCtrl', function($scope, service){
  $scope.rankedKittens = service.savedKittens();

});
