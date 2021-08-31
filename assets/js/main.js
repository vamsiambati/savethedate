/**
* Template Name: ComingSoon - v2.2.0
* Template URL: https://bootstrapmade.com/comingsoon-free-html-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";
  var cndDate = new Date('2021/09/01')
  cndDate.setHours(9)
  cndDate.setMinutes(30)
  if ($('.countdown').length) {
    var template = $('.countdown').html();
    $('.countdown').countdown(cndDate, function(event) {
      $(this).html(event.strftime(template));
    });
  }

  var newDate = new Date();

  if(newDate > cndDate) {
$('.countdown').addClass('hideAll')
  }
  

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });
  // $(document).(function(){
  //   $('.mainTitle').text(mainTitle);
  // })

})(jQuery);