$(document).ready(function(){
$(function(){

$("#add-tag-input").on({
  focusout : function() {
    var txt = this.value.replace(/[^a-z0-9\+\-\.\#]/ig,''); // allowed characters
    if(txt) $("<span/>", {text:txt.toLowerCase(), appendTo:"#tag-container", class:"dashfolio-tag"});

    this.value = "";
  },
  keyup : function(ev) {
    // if: comma|enter (delimit more keyCodes with | pipe)
    if(/(188|13)/.test(ev.which)) $(this).focusout();
  }
});
$('.tag-container').on('click', 'span', function() {
  if(confirm) $(this).remove();
  // if(confirm("Remove "+ $(this).text() +"?")) $(this).remove();
});

});

});
