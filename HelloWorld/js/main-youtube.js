/* Sowwyz#1337 */
$(document).ready(function(){
    "use strict";
    document.addEventListener('contextmenu', event => event.preventDefault());
    /* ------------------------------------- */
    /* 1. FullPage init .................... */
    /* ------------------------------------- */

    $('#fullpage').fullpage();

    /* ------------------------------------- */
    /* 2. Animate scroll fade adding ....... */
    /* ------------------------------------- */

    // Apply fading entrances on all except the tags included in the filter
    $('.main-content').find('*').filter(':not(.ask-to-scroll, .arrow, .arrow span, #first-text, #second-text, .link_in_text, small, .submit span, .block-item a)').addClass('animate-element');

    /* ------------------------------------- */
    /* 3. Menu button ...................... */
    /* ------------------------------------- */

    $('#small-screen-menu').on( "click", function() {

        $("#fullpage, #fp-nav, .brand-logo, footer").toggleClass("menu-opened");
        $("body, html").toggleClass("modal-open");

        $(this).toggleClass('open').toggleClass('custom-menu');
    });

    /* ------------------------------------- */
    /* 4. Transition for nav & logo position */
    /* ------------------------------------- */

    $(window).on("load resize", function() {
        if ($(this).width() < 1201) {
            $("#fp-nav").addClass("transition-desktop-mobile");
        }

        else if ($(this).height() < 750) {
            $("#fp-nav").addClass("transition-desktop-mobile");
        }

        else {
            $("#fp-nav").removeClass("transition-desktop-mobile");
        }

        if ($(this).width() < 481) {   
           $(".brand-logo").prependTo("#section0 .fp-tableCell");
           $('#section0 .container-inside').removeClass('container-special-ytb');
        }
        else {  
           $(".brand-logo").prependTo("body");
           $('#section0 .container-inside').addClass('container-special-ytb');
        }
    });

    /* ------------------------------------- */
    /* 5. Text rotator on loading screen ... */
    /* ------------------------------------- */

    function dataWord () {

      $("[data-words]").attr("data-words", function(i, d){
        var $self  = $(this),
            $words = d.split("|"),
            tot    = $words.length,
            c      = 0; 

        for(var loadtext=0; loadtext<tot; loadtext++) { $self.append($('<span/>',{text:$words[loadtext]}));}

        $words = $self.find("span").hide();

        (function loop(){
          $self.animate({ width: $words.eq( c ).width() });
          $words.stop().fadeOut().eq(c).fadeIn().delay(750).show(0, loop);
          c = ++c % tot;
        }());
        
      });

    }

    dataWord();

    /* ------------------------------------- */
    /* 6. Newsletter init .................. */
    /* ------------------------------------- */

    $("#notifyMe").notifyMe();

});
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */