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