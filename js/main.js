// jQuery animated scroll for menu
$(function() {
  $('#primary-menu a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000);
        return false;
      }
    }
  });
});

// initiate slideshow
$(function() {
    $('#ei-slider').eislideshow({
      easing    : 'easeOutExpo',
      titleeasing : 'easeOutExpo',
      titlespeed  : 1200
    });
});

// animate panel chevrons
$(function() {
    var chevronUp = '<i class="fa fa-chevron-circle-up"></i>';
    var chevronDown = '<i class="fa fa-chevron-circle-down"></i>';

    $('html, body').on('click', 'h4.panel-title a.collapsed', function() {
      var iconContainer = $(this).find('div');
      iconContainer.html(chevronUp);
    })

    $('html, body').on('click', 'h4.panel-title a:not(.collapsed)', function() {
      var iconContainer = $(this).find('div');
      iconContainer.html(chevronDown);
    })

});