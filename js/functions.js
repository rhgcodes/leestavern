/*****************************/
    $(window).load(function() {
        "use strict";
        setTimeout(function(){
          $("#page-content").removeClass('page-is-loading'); 
          $(".preloader-block").slideUp();
        }, 1600);

        var divHeight = $('.gallery-images').height(); 
        $('.gallery-left-bg, .gallery-right-bg').css('min-height', divHeight-'30');

    });
 /********************************/

$(document).ready(function(){
    "use strict";

    $("#page-content").addClass('page-is-loading');

    //navbar on click smooth scroll
    $(".navbar-nav li a[href^='#']").on('click', function(e) {
       e.preventDefault();
       var hash = this.hash;
       $('html, body').animate({
           scrollTop: $(hash).offset().top
         }, 300, function(){
           window.location.hash = hash;
         });
    });

    // add swipe to carousel 
    $(".carousel-inner").swipe( {
        swipeLeft:function(event, direction, distance, duration, fingerCount) { 
            $(this).parent().carousel('prev'); 
        },
        swipeRight: function() {
            $(this).parent().carousel('next'); 
        },
        threshold:0
    });

    // chef's recomandations carousel
    $(".featured-food-carousel").owlCarousel({
        items: 1,
        loop: true,
    });

    // story's carousel
    $(".story-block").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
    });

    /* team chefs active state*/
    $('.chef').on({
        mouseenter: function(){
            $(this).addClass('active');
        },
        mouseleave: function(){
            $(this).removeClass('active');
        }
    });


   //countdown timers - format mm/dd/year
    $('.countdown-timer1').downCount({
        date: '05/08/2016 12:00:00' 
    });
    $('.countdown-timer2').downCount({
        date: '08/01/2016 12:00:00'
    });
    $('.countdown-timer3').downCount({
        date: '08/16/2016 12:00:00'
    });
    
    // events headers hide on click
    $(".event1 .panel-heading").hide();
    $('.event1 .collapsed').on('click', function(){
        "use strict";
       $(this).closest($( '.panel-heading' )).hide();
       $(".event2 .panel-heading, .event3 .panel-heading").show();
    });
    $('.event2 .collapsed').on('click', function(){
        "use strict";
       $(this).closest($( '.panel-heading' )).hide();
       $(".event1 .panel-heading, .event3 .panel-heading").show();
    });
    $('.event3 .collapsed').on('click', function(){
        "use strict";
       $(this).closest($( '.panel-heading' )).hide();
       $(".event2 .panel-heading, .event1 .panel-heading").show();
    });

    //gallery filter active state
    $('.section-intro button').on('click', function(){
        $('button.active').removeClass('active');
        $(this).addClass('active');
    });
    //gallery lightbox(magnific popup)
    $('.gallery-images').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
          enabled: true, // set to true to enable gallery
          navigateByImgClick: true,
          arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
          tPrev: 'Previous (Left arrow key)', // title for left button
          tNext: 'Next (Right arrow key)', // title for right button
          tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        }
    });

    //reservation datepicker
    $("#reservDay").datepicker({
        format: 'dd/mm/yyyy',
        weekStart: 1,    
    });
    //reservation show curent time
    if($('#currentTime').length > 0){
        (function () {
        function checkTime(i) {
            return (i < 10) ? "0" + i : i;
        }
        function startTime() {
            var today = new Date(),
                h = checkTime(today.getHours()),
                m = checkTime(today.getMinutes()),
                s = checkTime(today.getSeconds());
            document.getElementById('currentTime').innerHTML = h + ":" + m + ":" + s;
                var t = setTimeout(function () {
                startTime()
            }, 500);
        }
            startTime();
        })();
    }

    // removing yellow bg from inputs
    $('input').on('blur', function(){
       $(this).closest($( '.form-group' )).removeClass('focused');
    }).on('focus', function(){
      $(this).closest($( '.form-group' )).removeClass('focused').addClass('focused');
    });
    $('textarea').on('blur', function(){
       $(this).closest($( '.form-group' )).removeClass('focused');
    }).on('focus', function(){
      $(this).closest($( '.form-group' )).removeClass('focused').addClass('focused');
    });

    // dinamically change the images
    $.each($('[data-bg]'), function(){
        if ($(this).attr('data-bg').length > 0){
          $(this).css('background-image', 'url('+ $(this).attr('data-bg') +')');
        }
    });

    //-----------------------------------------------
    //              ON SCROLL FUNCTIONS
    //-----------------------------------------------
     
	$(window).scroll(function() {    
    		// fixed to top navbar
            var scroll = $(window).scrollTop();
    	    if (scroll >= 100) {
    	       	$(".navbar-default").addClass("navbar-fixed");
    	    }else{
    	    	$(".navbar-default").removeClass("navbar-fixed");
    	    }
	});
    


    //responsive functions
    if ($(window).width() < 767) {
            $('.navbar-toggle').on('click', function(){
                var scroll2 = $(window).scrollTop();
                if ($('.navbar-default').hasClass('navbar-fixed') && scroll2 <= 100) {
                    $(".navbar-default").removeClass("navbar-fixed");
                }
                else{
                    if (scroll2 > 100) {
                        $('.navbar-default').addClass('navbar-fixed');
                    }
                }
            });

            $('.navbar-nav a').on('click', function(){
                $('.navbar-collapse').removeClass('in');
                $('.navbar-toggle').addClass('collapsed');
            });
        
    } else{
        return false;
    }

});


  


    

    
    

     






    