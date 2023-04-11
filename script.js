window.onscroll=function(){
  scroll();
};

function scroll(){
  if(document.body.scrollTop>20|| document.documentElement.scrollTop >20){
    document.getElementById("header").style.top="0";

  }
  else{
    document.getElementById("header").style.top="-60px";
  }
}


var typed = $(".typed");

$(function() {
  var strings = $('.typed-items').text();
  strings = $('.typed-items').data('typed-person') + ',' + strings;
  strings = strings.split(',');

  typed.typed({
    strings: strings,
    typeSpeed: 100,
    loop: true,
  });
});
