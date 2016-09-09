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
      var startX = 0, startY = 0, x = 0, y = 0;

      element.css({
       position: 'relative',
      //  border: '1px solid red',
      //  backgroundColor: 'lightgrey',
       cursor: 'pointer'
      });

      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        startX = event.pageX - x;
        startY = event.pageY - y;
        $(document).on('mousemove', mousemove);
        $(document).on('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.pageY - startY;
        x = event.pageX - startX;
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup() {
        $(document).off('mousemove', mousemove);
        $(document).off('mouseup', mouseup);
      }

      $(".kitten").flip({
        trigger: 'manual',
      });
      $('.viewMore').click(function(){
        $('.kitten').flip('toggle');
        $(this).text(function(i, text){
          return text === "View Picture" ? "View Details" : "View Picture";
          })
        // $('.viewMore').click(function(){
        //   $('.kitten').flip(false)
        // })
      })

      // })
    }
  }
})
