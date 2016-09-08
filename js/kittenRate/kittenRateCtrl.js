angular.module('kittenRate').controller('kittenRateCtrl', function($scope, service){
$scope.testing = "I'm working";

$scope.getKittens = service.getKittens();

$scope.getKittens.then(function(response){
  $scope.kittens = response.data
})


$scope.kitten_index = 0
$scope.next = function(){
  if ($scope.kitten_index === $scope.kittens.length -1) return;
  $scope.kitten_index++;
  console.log($scope.kitten_index)
  return $scope.kittens
}



});
