$(document).ready(function () {

  var speed = {
    $menu: $('.header'),
    menuSelector: 'a',
    panelSelector: '.snap',
    slideSpeed: 500,
    delay: 0,
    easing: 'swing',
  };
  $('body').panelSnap(speed);
  var options = {
    $menu: $('div .menu'),
    menuSelector: 'a',
    panelSelector: '.drinks',
    slideSpeed: 600,
    easing: 'swing',
  };
  $('.panels').panelSnap(options);
});
