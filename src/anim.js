// import $ from "jquery";
// var $ = require("jquery");
// const $ = window.$;

jQuery(function($) {

    console.log("jquery")

  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
      $animatables = $(".animatable");
      console.log(offset)

    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off("scroll", doAnimations);
    }

    // Check all animatables and animate them if necessary
    $animatables.each(function(i) {
      var $animatable = $(this);
      if ($animatable.offset().top + $animatable.height() - 20 < offset) {
        $animatable.removeClass("animatable").addClass("animated");
        console.log("triggered")
      }
    });
    $(window).on("load", function () {
        setTimeout(function(){
        $(".animatablex").removeClass("animatablex").addClass("animated");
        console.log( "ready!" );
    },3000);
    });
  };

  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on("scroll", doAnimations);
  $(window).trigger("scroll");
});






var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  console.log("window_top_position"+ window_top_position)

  $.each($('.animation-element'), function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('animated');
      $element.removeClass('animatable');
      console.log( "animated!" );
    } else {
        $element.removeClass('animated');
        $element.addClass('animatable');
        console.log( "de-animated!" );
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

$(document).scroll(function() {
    console.log($(document).scrollTop());
})