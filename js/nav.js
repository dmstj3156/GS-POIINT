$(function(){
    $('nav').on('mouseover', function(){
        $('.depth2, .nav_bg').addClass('show')
      })
  
      $('nav').on('mouseout', function(){
        $('.depth2, .nav_bg').removeClass('show')
      })
});

$(function(){
  $('#toggle').click(function(){
    $('nav').toggleClass('show');
  })
  if($(this).hasClass('active')){
    //열림버튼 표시
   
  } else {
    
    //닫힘버튼 표시
   
  }
})
$(function(){
  $('#toggle').on('click', function(){
    $('#gnb,.depth1').show();
});

// 메인메뉴 닫기
$('.btn_close').on('click', function(){
    $('#gnb').hide();
});
})