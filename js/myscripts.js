/*$("#black_bg").click(function () {
    $("#black_bg").animate({
        opacity: 0
    }, 1000);
});*/

var fadeStart = 100 // 100px scroll or less will equiv to 1 opacity
  ,
  fadeUntil = 500 // 200px scroll or more will equiv to 0 opacity
  ,
  black_bg = $('#black_bg');

/**
 * Fade on top of the page
**/

$(window).bind('scroll', function() {
  var offset = $(document).scrollTop(),
    opacity = 0;
  if (offset <= fadeStart) {
    opacity = 1;
  } else if (offset <= fadeUntil) {
    opacity = 1 - offset / fadeUntil;
  }
  black_bg.css('opacity', opacity);
});


/**
 * Smooth scroll between sections
**/

const allSections = document.querySelectorAll("section");

            /* forEach : pour chaque, remplace 'while'*/


allSections.forEach(function(section, index) {
  const nextSectionIndex = index + 1;

  $(section).find("a").not(".scroll-up").click( function(event) {
    event.preventDefault();
    const sectionToGo = $(`.section-${nextSectionIndex}`);
      $('html, body').animate(
        {
          scrollTop: sectionToGo.offset().top
        },
        'slow'
      );
  });
});

/* Scroll vers le haut  */


$(".scroll-up").click(function (event) {
  event.preventDefault();
  $('html, body').animate(
    {
      scrollTop: $("body").offset().top
    },
    'slow'
  );
})


// $(function() {
//   $('.scroll-down').click(function() {
//     $('html, body').animate({
//       scrollTop: $('section.1').offset().top
//     }, 'slow');
//     return false;
//   });
// });
//
//
// $(function() {
//   $('.b').click(function() {
//     $('html, body').animate({
//       scrollTop: $('.2').offset().top
//     }, 'slow');
//     return false;
//   });
// });
//
// $(function() {
//   $('.c').click(function() {
//     $('html, body').animate({
//       scrollTop: $('.d').offset().top
//     }, 'slow');
//     return false;
//   });
// });
//
//
// $(function() {
//   $('.d').click(function() {
//     $('html, body').animate({
//       scrollTop: $('section .e').offset().top
//     }, 'slow');
//     return false;
//   });
// });



/*

  $(function() {
      $('.scroll-up').click(function() {
        $("html, body").animate({
          scrollTop: $('.scroll-up').offset().top
        }, 'slow');
        return false;
      });
/*
var fadeStart=100 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil=200 // 200px scroll or more will equiv to 0 opacity
    ,fading = $('#fading')
;

$("#black_bg").bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart ){
        opacity=1;
    }else if( offset<=fadeUntil ){
        opacity=1-offset/fadeUntil;
    }
    fading.css('opacity',opacity).html(opacity);
});
*/
