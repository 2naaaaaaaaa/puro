$(function(){
    $("#bar>ul>li>a").click(function(){
        $(this).parent().addClass("on").siblings().removeClass("on");
    });
});
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
    $("#shop>ul>li>a").click(function(){
        $(this).parent().addClass("on").siblings().removeClass("on");
    });
});