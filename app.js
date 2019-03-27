/* Navigation Bar */
/*http://callmenick.com/post/expanding-search-bar-using-css-transitions*/
(function($) {
  "use strict";

  var $navbar = $(".nav"),
    y_pos = $navbar.offset().top,
    height = $navbar.height();

  //scroll top 0 sticky
  $(document).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 0) {
      $navbar.addClass("sticky");
    } else {
      $navbar.removeClass("sticky");
    }
  });

  //section sticky
  // $(document).scroll(function() {
  //       var scrollTop = $(this).scrollTop();
  //       if ($(window).height() > scrollTop) {
  //         $navbar.removeClass("sticky");
  //       } else {
  //         $navbar.addClass("sticky");
  //       }
  //   });
})(jQuery, undefined);

$(".menu").click(function() {
  $("#nav").toggleClass("open");
});

/* Contact Form */
$(function() {
  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator

  $("#contact-form").validator();

  // when the form is submitted
  $("#contact-form").on("submit", function(e) {
    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
      var url = "contact.php";

      // FOR CODEPEN DEMO I WILL PROVIDE THE DEMO OUTPUT HERE, download the PHP files from
      // https://bootstrapious.com/p/how-to-build-a-working-bootstrap-contact-form

      var messageAlert = "alert-success";
      var messageText =
        "Your message was sent, thank you. I will get back to you soon.";

      // let's compose Bootstrap alert box HTML
      var alertBox =
        '<div class="alert ' +
        messageAlert +
        ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
        messageText +
        "</div>";

      // If we have messageAlert and messageText
      if (messageAlert && messageText) {
        // inject the alert to .messages div in our form
        $("#contact-form").find(".messages").html(alertBox);
        // empty the form
        $("#contact-form")[0].reset();
      }

      return false;
    }
  });
});
