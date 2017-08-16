$(document).ready(function () {
  var speed = {
    slideSpeed: 500,
    delay: 0,
    easing: 'linear',
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
