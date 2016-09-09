angular.module('kittenRate').controller('rankingsCtrl', function($scope, service){
    $scope.kittens = service.savedKittens();
    console.log($scope.kittens)
});
