$( document ).ready(function () {
            $('body').panelSnap();
            var options = {
            $menu: $('div .menu'),
            menuSelector: 'a',
            panelSelector: '.drinks',
          };
          $('.panels').panelSnap(options);
        });
