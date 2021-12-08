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
    $('#gnb').addClass('show');
});

// 메인메뉴 닫기
$('.btn_close').on('click', function(){
    $('#gnb').removeClass('show');
});

// PC화면으로 넘어가면 모바일 메뉴 닫기
$(window).on('resize', function(){
  var x = window.matchMedia("(min-width: 768px)");
  if(x.matches) { $('#gnb').removeClass('show');}
})
})