$( document ).ready( function() {
    var jbOffset = $( '#header' ).offset();
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > 969) {
        $( '#header' ).addClass("bg");
      }
      else {
        $( '#header' ).removeClass("bg");
      }
    });
  });

  $(function(){
    $("#menu>ul>li>a").click(function(){
        $(this).parent().addClass("on").siblings().removeClass("on");
    });
});



  $(function(){
    $("#page>ul>li>a").click(function(){
        $(this).parent().addClass("on2").siblings().removeClass("on2");
    });
});

  $(function(){
	$("#faq_box> ul> li").click(function(){
		$(this).children(".text_info").slideToggle();
	});
	$("#faq_box> ul> li").click(function(){
		$(this).toggleClass("turn");
		
		if($(this).hasClass("turn")===true){
				$(this).siblings().removeClass("turn");
			
		}

	});
});






$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
  $('html, body').animate({
  scrollTop: target.offset().top
  }, 500);//움직이는 시간 조정
  return false;
  }
  }
  });
  });