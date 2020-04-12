(function(){
	"use strict";
    /////////////// Preloader 
var loader = $(".preloader");
var wHeight = $(window).height();
var wWidth = $(window).width();
var o = 0;
	
loader.css({
    top: wHeight / 2 - 2.5,
    left: wWidth / 2 - 200
});

do {
    loader.animate({
        width: o
    }, 10);
    o += 3;
} while (o <= 400);
if (o === 402) {
    loader.animate({
        left: 0,
        width: '100%'
    });
    loader.animate({
        top: '0',
        height: '100vh'
    });
}

setTimeout(function() {
    $(".preloader-wrapper").fadeOut('fast');
    (loader).fadeOut('fast');
}, 3000);
	
	///////////type js
	$(".typed").typed({
		strings: ["Alex Hunter","A Developer", "A Designer", "A Freelancer"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
	
	
	//animation scroll js
    var html_body = $('html, body');
    $('nav a,.scroll_down a,.banbtn a,.cont a').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });    
   

	
   ////////////////////////// back to top js  
$('body').scrollspy({ target: '#menu-part' });    
  
$(".back-to-top").on('click',function(){
    $('html, body').animate({scrollTop:0},1000);
});
	
	// back to top with fade in fade out  
$(window).on('scroll',function(){
    if ($(this).scrollTop() > 200){
        $(".back-to-top").fadeIn(500);
    }
    else{
        $(".back-to-top").fadeOut(500);
    }
	
    // sticky menu
    if($(this).scrollTop() > 200){
        $(".sticky").addClass("stickyadd");
    }
    else{
        $(".sticky").removeClass("stickyadd");
    }
});
	
	//skillbar
    $(window).scroll(function () {
    if($(window).scrollTop() > 800) {

        jQuery('.skillbar').each(function () {
            jQuery(this).find('.skillbar-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 3000);
        });

    }
});
///////////////////Counter UP

    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
	
	
  /////clients
    $('.clients_slide').slick({
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows:true,
    autoplay: true,
    prevArrow: '<i class="fa fa-chevron-left left_arrow"></i>',
    nextArrow: '<i class="fa fa-chevron-right right_arrow"></i>',
    
});
	
// Portfolio
    $(window).on('load', function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').on('click', function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });   
});    
    
$('.venobox').venobox(); 
    //wow js
    new WOW().init();
	               

}());
