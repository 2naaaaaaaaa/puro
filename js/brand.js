$( document ).ready( function() {
    var jbOffset = $( '#header' ).offset();
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > 969) {
        $( '#header' ).addClass("bg");
        $(".logo_img").attr("src", "img/logo.png");//바뀔로고이미지주소
      }
      else {
        $( '#header' ).removeClass("bg");
        $(".logo_img").attr("src", "img/2.brand/nav_logo_white.png");//원래 로고이미지주소
      }
    });
  });
