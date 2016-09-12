$(document).ready(function(){

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


})
