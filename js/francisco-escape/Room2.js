$(document).ready(function() {
  function cansee(t) {$(t).css('display', 'block')};
  function notsee(n) {$(n).css('display', 'none')};

function antiGrav(ele) { // anti-gravity floating on an element ;)
  var distance = 8;
  $(ele).animate({
    'top': "+="+distance+"px"
  },1500,"swing",function(){
    $(ele).animate({
      'top': "-="+distance+"px"
    },1300,"swing",function(){
      antiGrav(ele);
    });
  });
}
antiGrav("#floatin");
antiGrav("#floatinn");
antiGrav("#floati");
$("#floatin").click(function(event) {
  notsee(this);
  $("#stuff").append('<div class="invent"></div>');
});
$("#floati").click(function(event) {
  notsee(this);
  $("#stuff").append('<div class="inven"></div>');
});
$("#floatinn").click(function(event) {
  notsee(this);
  $("#stuff").append('<div class="inventt"></div>');
});
});
