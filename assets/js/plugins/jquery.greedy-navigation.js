/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $vlinks_persist_tail = $vlinks.children("*.persist.tail");
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {

  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if (viewportWidth >= 768) {
    while ($hlinks.children().length > 0) {
      if ($vlinks_persist_tail.length > 0 && $vlinks_persist_tail.children().length > 0) {
        $hlinks.children().first().insertBefore($vlinks_persist_tail);
      } else {
        $hlinks.children().first().appendTo($vlinks);
      }
    }

    breaks = [];
    $btn.addClass('hidden');
    $btn.removeClass('close');
    $hlinks.addClass('hidden');
  } else {
    var nonPersistVisible = $vlinks.children("*:not(.persist)");

    if (nonPersistVisible.length > 0) {
      nonPersistVisible.each(function () {
        $(this).appendTo($hlinks);
      });
    }

    breaks = [];
    $btn.removeClass('hidden');
    $btn.removeClass('close');
    $hlinks.addClass('hidden');
  }

  // Keep counter updated
  $btn.attr("count", $hlinks.children().length);

  // update masthead height and the body/sidebar top padding
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');
  if ($(".author__urls-wrapper button").is(":visible")) {
    $(".sidebar").css("padding-top", "");
  } else {
    $(".sidebar").css("padding-top", mastheadHeight + "px");
  }

}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
screen.orientation.addEventListener("change", function () {
  updateNav();
});

$btn.on('click', function () {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();
