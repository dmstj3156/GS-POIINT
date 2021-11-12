$(function(){
    $('nav').on('mouseover', function(){
        $('.depth2, .nav_bg').addClass('show')
      })
  
      $('nav').on('mouseout', function(){
        $('.depth2, .nav_bg').removeClass('show')
      })
});


$(function(){
  $('#toggle').on('click', function(){
    $('#gnb,.depth1').stop().fadeIn();
});

// 메인메뉴 닫기
$('.btn_close').on('click', function(){
    $('#gnb').stop().fadeOut();
});
})