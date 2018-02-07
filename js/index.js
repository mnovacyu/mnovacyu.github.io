$(document).ready(function(e) { 

  $(".menu-item").click(function(e) {
      e.preventDefault();
      var aid = $(this).attr("href");
      $('html,body').animate({scrollTop: $(aid).offset().top},400);
  });

});