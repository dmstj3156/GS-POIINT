$(function(){
    $('nav').on('mouseover', function(){
        $('.depth2, .nav_bg').addClass('show')
      })
  
      $('nav').on('mouseout', function(){
        $('.depth2, .nav_bg').removeClass('show')
      })
});