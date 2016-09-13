angular.module('kittenRate').controller('kittenRateCtrl', function($scope, service){

//get kittens from service
$scope.getKittens = service.getKittens();
$scope.getKittens.then(function(response){
  $scope.kittens = response.data
})


$scope.kitten_index = localStorage.getItem('id')*1

$scope.next = function(){
  if ($scope.kitten_index === $scope.kittens.length - 1) return;
    localStorage.setItem('id', $scope.kitten_index + 1)
  $scope.kitten_index++;
  console.log($scope.kitten_index)
  return $scope.kittens
}
  console.log(localStorage)

//push specific kitten to savedKittens array in service
$scope.saveKitten = function(kitten){
    service.saveKitten(kitten)
}

});
