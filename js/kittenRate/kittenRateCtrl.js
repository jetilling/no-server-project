angular.module('kittenRate').controller('kittenRateCtrl', function($scope, service){

//get kittens from service
$scope.getKittens = service.getKittens();
$scope.getKittens.then(function(response){
  $scope.kittens = response.data
})

//show one kitten at a time in ng-repeat
$scope.kitten_index = 0
$scope.next = function(){
  if ($scope.kitten_index === $scope.kittens.length -1) return;
  $scope.kitten_index++;
  console.log($scope.kitten_index)
  return $scope.kittens
}

//push specific kitten to savedKittens array in service
$scope.saveKitten = function(kitten){
    service.saveKitten(kitten)
}

});
