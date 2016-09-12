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
      $scope.rankedKittens = service.savedKittens();
    },
    link: function(scope, element, attrs){
        scope.getKittens.then(function(response){
          scope.kittens = response.data
        })

      $("#card").flip({
        trigger: 'manual',
      });
      $('.cuteButton').click(function(){
        $("#card").flip(true)
      })

      var open = false;

      $(document).on('mouseover', ".open", function() {
        if(!open){
        document.getElementById("mySidenav").style.width = "250px";
        $('.open').css('left', '230px');
        $('.text').text('Close');
        open = true;
      } else if(open){
            document.getElementById("mySidenav").style.width = "20px";
            $('.open').css('left', '0px');
            $('.text').text('Open');
            open = false;
        }
    })

    }
  }



})
