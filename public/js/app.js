$(document).ready(function () {
  $('#absynth').hover(function () {
    $('.abs').fadeIn();
  },

    function () {
    $('.abs').fadeOut();
  });

  $('#vodka').hover(function () {
    $('.vod').fadeIn();
  },

    function () {
    $('.vod').fadeOut();
  });

  $('#marion').hover(function () {
    $('.mar').fadeIn();
  },

    function () {
    $('.mar').fadeOut();
  });

  $('#rum').hover(function () {
    $('.rum').fadeIn();
  },

    function () {
    $('.rum').fadeOut();
  });

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
