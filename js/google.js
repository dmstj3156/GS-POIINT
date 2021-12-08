$(function(){
   
    function googleTranslateElementInit() { 
        new google.translate.TranslateElement(
            {
                //gaTrack: true,  // Google 애널리틱스
                //gaId: 'UA-*******', // Google 애널리틱스 웹 속성 ID
                pageLanguage: 'ko', 
                includedLanguages: 'de,en,ja,ko,zh-CN', 
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE, 
                autoDisplay: false, multilanguagePage: true
            }, 
            'google_translate_element'
        ); 
    } 
)};

$(function(){
    $(window).load(function () { 
        
        $('.translation-icons').css('visibility', 'visible'); 
    
            $('.translation-icons a').click(function(e) { 
                e.preventDefault(); 
                var placement = $(this).data('placement'); 
                var lang_num = $('.translation-icons a').length; 
                var $frame = $('.goog-te-menu-frame:first'); 
    
                if (!$frame.size()) { 
                    alert("Error: Could not find Google translate frame."); 
                    return false; 
                } 
    
                var langs = $('.goog-te-menu-frame:first').contents().find('a span.text'); 
    
                if(langs.length != lang_num) placement = placement+1; 
    
                langs.eq(placement).click(); 
                return false; 
            }); 
    });ko 
})
  