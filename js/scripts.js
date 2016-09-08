$(document).ready(function(){

  var width = $(window).width();
  var height = $(window).height();
  var totalDivs = (width/height)*100;
  console.log(height)
  function putDivOnScreen(width, height){
    for(var i = 0; i <= totalDivs; i++){
        $('.div-container').append('<div class="square"></div>')
    }
  }
putDivOnScreen(width, height);

$('.square')
  .mouseover(function(){
    $(this).css('background', 'transparent').delay(1000)
          .queue(function (next) {
            $(this).css('background', 'black');
            next();
          })
  })
$('.div-container').click(function(){
    $(this).css('z-index', '0');
  })






})
