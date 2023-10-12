// © Copyright 2015 - Archi by Designesia 

jQuery(document).ready(function() {		
	'use strict';				// use strict mode

	var de_header_style 	= 1; // 1 - solid, 2 - transparent
	var de_menu_separator	= 1; // 1 - dotted, 2 - border, 3 - circle, 4 - square, 5 - plus, 6 - strip, 0 - none
	var de_color_style		= 2; // 1 - default, 2 - light style
	var de_font_style		= 2; // 1 - default, 2 - alternate font style

	var mobile_menu_show    = 0;
	
	if(de_color_style==2){$('body').addClass('de_light');}	
	if(de_font_style==2){$('head').append('<link rel="stylesheet" href="css/font-style-2.css" type="text/css" />');}	
	if(de_header_style==2){$('header').addClass('transparent')}	
	if(de_menu_separator==2){$('#mainmenu').addClass('line-separator');
	}else if(de_menu_separator==3){$('#mainmenu').addClass('circle-separator');
	}else if(de_menu_separator==4){$('#mainmenu').addClass('square-separator');
	}else if(de_menu_separator==5){$('#mainmenu').addClass('plus-separator');
	}else if(de_menu_separator==6){$('#mainmenu').addClass('strip-separator');
	}else if(de_menu_separator==0){$('#mainmenu').addClass('no-separator');}
	
// --------------------------------------------------
// paralax background
// --------------------------------------------------
	var $window = jQuery(window);
   	jQuery('section[data-type="background"]').each(function(){
    var $bgobj = jQuery(this); // assigning the object
                    
    jQuery(window).scroll(function() {
	var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
	var coords = '50% '+ yPos + 'px';
	$bgobj.css({ backgroundPosition: coords });
		
	});
 	});
	document.createElement("article");
	document.createElement("section");
	
	
// --------------------------------------------------
// magnificPopup
// --------------------------------------------------
	
	$('.simple-ajax-popup-align-top').magnificPopup({
        type: 'ajax',
        alignTop: true,
        overflowY: 'scroll'
    });

    $('.simple-ajax-popup').magnificPopup({
        type: 'ajax'
    });

// wow jquery
	
new WOW().init();
	
// --------------------------------------------------
// init
// --------------------------------------------------
	function init_de(){
	jQuery('.de-team-list').each(function(){

		 jQuery(this).find("img").on('load', function() {
				var w = jQuery(this).css("width");
		 	   	var h = jQuery(this).css("height");
			   	//nh = (h.substring(0, h.length - 2)/2)-48;
		 
				jQuery(this).parent().parent().find(".team-pic").css("height",h);
				jQuery(this).parent().parent().find(".team-desc").css("width",w);
			 	jQuery(this).parent().parent().find(".team-desc").css("height",h);
				jQuery(this).parent().parent().find(".team-desc").css("top",h);

			}).each(function() {
			  if(this.complete) $(this).load();
			});
	});

	jQuery(".de-team-list").on("mouseenter", function () {
		 var h;
		 h = jQuery(this).find("img").css("height");
		 jQuery(this).find(".team-desc").stop(true).animate({'top': "0px"},350,'easeOutQuad');
		 jQuery(this).find("img").stop(true).animate({'margin-top': "-100px"},400,'easeOutQuad');
	}).on("mouseleave", function () {		
		 var h;
		 h = jQuery(this).find("img").css("height");
		 jQuery(this).find(".team-desc").stop(true).animate({'top': h},350,'easeOutQuad');
		 jQuery(this).find("img").stop(true).animate({'margin-top': "0px"},400,'easeOutQuad');
  	})	
	
	
	// portfolio
	
		jQuery('.item .picframe').each(function(){	
		
		 jQuery(this).find("img").css("width","100%");
		 jQuery(this).find("img").css("height","auto");
		 
		 jQuery(this).find("img").on('load', function() {
				var w = jQuery(this).css("width");
		 	   	var h = jQuery(this).css("height");
			   	//nh = (h.substring(0, h.length - 2)/2)-48;
		 
				jQuery(this).parent().css("height",h);

			}).each(function() {
			  if(this.complete) $(this).load();
			});
		});
		
	// --------------------------------------------------
	// portfolio hover
	// --------------------------------------------------
	jQuery('.overlay').fadeTo(1, 0);
	
	// gallery hover
	jQuery(".item .picframe").on("mouseenter", function () {
	 jQuery(this).parent().find(".overlay").width(jQuery(this).find("img").css("width"));
	 jQuery(this).parent().find(".overlay").height(jQuery(this).find("img").css("height"));
	 jQuery(this).parent().find(".overlay").stop(true).fadeTo(300, .9);
	 var picheight = jQuery(this).find("img").css("height");
	 var newheight;
	 newheight = (picheight.substring(0, picheight.length - 2)/2)-10;
	 //alert(newheight);
	 jQuery(this).parent().find(".pf_text").stop(true).animate({'margin-top': newheight},300,'easeOutCubic');
	 
	 var w = jQuery(this).find("img").css("width");
	 var h = jQuery(this).find("img").css("height");
	 var w = parseInt(w, 10);
	 var h = parseInt(h, 10);
	 var $scale = 1.2;
	 //alert(w);
	 
	jQuery(this).find("img").stop(true).animate({
            width:  w*$scale,
            height: h*$scale,
            'margin-left': -w*($scale - 1)/2,
            'margin-top':  -h*($scale - 1)/2
     }, 700,'easeOutQuad');

	
  	}).on("mouseleave", function () {
	 var newheight;
	 var picheight = jQuery(this).find("img").css("height");	 
	 newheight = (picheight.substring(0, picheight.length - 2)/2)-10;
	 jQuery(this).parent().find(".pf_text").stop(true).animate({'margin-top': newheight - 30},300,'easeOutCubic');
	 jQuery(this).parent().find(".overlay").stop(true).fadeTo(300, 0);
	 jQuery(this).find("img").stop(true).animate({
            width:  '100%',
            height: '100%',
            'margin-left': 0,
            'margin-top': 0
     }, 700,'easeOutQuad');
	})

	
	
	
	jQuery('.overlay').fadeTo(1, 0);
	// team hover
	}
	
	
	init_de();
	

	// --------------------------------------------------
	// preloader
	// --------------------------------------------------
	
	//calling jPreLoader function with properties
	jQuery('body').jpreLoader({
		splashID: "#jSplash",
		splashFunction: function() {  //passing Splash Screen script to jPreLoader
			jQuery('#jSplash').children('section').not('.selected').hide();
			jQuery('#jSplash').hide().fadeIn(800);
			
			var timer = setInterval(function() {
				splashRotator();
			}, 1500);
		}
	}, function() {	//jPreLoader callback function
		clearInterval();
		
			jQuery(function(){
			var v_url = document.URL;
			
			if (v_url.indexOf('#') != -1) {
			var v_hash = v_url.substring(v_url.indexOf("#")+1);
			
			
				jQuery('html, body').animate({					
				scrollTop: jQuery('#' + v_hash).offset().top - 70
				}, 200);
				return false;
			}
	});	
			
			
	});
	
	<!-- End of jPreLoader script -->

	function splashRotator(){
		var cur = jQuery('#jSplash').children('.selected');
		var next = jQuery(cur).next();
		
		if(jQuery(next).length != 0) {
			jQuery(next).addClass('selected');
		} else {
			jQuery('#jSplash').children('section:first-child').addClass('selected');
			next = jQuery('#jSplash').children('section:first-child');
		}
			
		jQuery(cur).removeClass('selected').fadeOut(100, function() {
			jQuery(next).fadeIn(100);
		});
	}
	
	
// --------------------------------------------------
// function
// --------------------------------------------------
	
	function video_autosize(){
		jQuery('.de-video-container').each(function() {
			var height_1 = jQuery(this).css("height");
			var height_2 = jQuery(this).find(".de-video-content").css("height");
			var newheight = (height_1.substring(0, height_1.length - 2)-height_2.substring(0, height_2.length - 2))/2;
			jQuery(this).find('.de-video-overlay').css("height", height_1);
			jQuery(this).find(".de-video-content").animate({'margin-top': newheight},'fast');
		});
	}
	
	
// --------------------------------------------------
// sticky header
// --------------------------------------------------
	    
    jQuery(window).on("scroll", function() {
    	jQuery("header").addClass("clone", 1000, "easeOutBounce" );
    });
	
	
	
	window.onresize = function(event) {
		
		enquire.register("screen and (min-width: 993px)", {
		match : function() {
			jQuery('#mainmenu').show();
			mobile_menu_show = 1;
		},  
		unmatch : function() {
			jQuery('#mainmenu').hide();
			mobile_menu_show = 0;
			jQuery("#menu-btn").show();
		}
		});
		
		init_de();
		video_autosize();
		jQuery('#gallery').isotope('reLayout');

		$('header').removeClass('smaller');
		$('header').removeClass('logo-smaller');
		$('header').removeClass('clone');
		
		
	};	
	

	function init() {
        window.addEventListener('scroll', function(e){
			
			var mq = window.matchMedia( "(min-width: 993px)" );
			
			if (mq.matches) {
				var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 100,
                header = document.querySelector("header");
            if (distanceY > shrinkOn) {
                classie.add(header,"smaller");
				jQuery('header').addClass("logo-smaller");
            } else {
                if (classie.has(header,"smaller")) {
                    classie.remove(header,"smaller");
					jQuery('header').removeClass("logo-smaller");
                }

            }
			}

            
        });
    }
    window.onload = init();
	



// --------------------------------------------------
// owlCarousel
// --------------------------------------------------

	jQuery("#gallery-carousel").owlCarousel({
    items : 4,
    navigation : false,
	pagination : false
    });
	
	jQuery(".carousel-gallery").owlCarousel({
    items : 4,
    navigation : false,
	pagination : false
    });
	
	jQuery("#blog-carousel").owlCarousel({
    items : 2,
    navigation : false,
	pagination : true
    });
	
	
	
	jQuery("#testimonial-carousel").owlCarousel({
    items : 2,
    navigation : false
    });
	
	jQuery("#logo-carousel").owlCarousel({
    items : 6,
    navigation : false,
	pagination : false,
	autoPlay : true
    });
	
	jQuery("#contact-carousel").owlCarousel({
    items : 1,
	singleItem:true,	
    navigation : false,
	pagination : false,
	autoPlay : true
    });
	
	
	jQuery(".text-slider").owlCarousel({
    items : 1,
	singleItem:true,	
    navigation : false,
	pagination : false,
	mouseDrag : false,
	touchDrag : false,
	autoPlay : 4000,
	transitionStyle : "fade"
    });
	
	jQuery(".blog-slide").owlCarousel({
    items : 1,
	singleItem:true,	
    navigation : false,
	pagination : false,
	autoPlay : false
    });
	
	// Custom Navigation owlCarousel
	$(".next").on("click", function() {
		$(this).parent().parent().find('.blog-slide').trigger('owl.next');
	});
	$(".prev").on("click", function() {
		$(this).parent().parent().find('.blog-slide').trigger('owl.prev');
	});

	
	
// --------------------------------------------------
// custom positiion
// --------------------------------------------------
	var $doc_height = jQuery(window).innerHeight(); 
	jQuery('#homepage #content.content-overlay').css("margin-top", $doc_height);
	jQuery('.full-height').css("height", $doc_height);
	var picheight = jQuery('.center-y').css("height");
	picheight = parseInt(picheight, 10);
	jQuery('.center-y').css('margin-top', (($doc_height - picheight)/2)-90);
	jQuery('.full-height .de-video-container').css("height",$doc_height);
	

	
// --------------------------------------------------
// blog list hover
// --------------------------------------------------
	jQuery(".blog-list").on("mouseenter", function () {
	 var v_height = jQuery(this).find(".blog-slide").css("height");
	 var v_width = jQuery(this).find(".blog-slide").css("width");
	 var newheight = (v_height.substring(0, v_height.length - 2)/2)-40;
	 jQuery(this).find(".owl-arrow").css("margin-top",newheight);
	  jQuery(this).find(".owl-arrow").css("width",v_width);
	  jQuery(this).find(".owl-arrow").fadeTo(150,1);
	 //alert(v_height);
	}).on("mouseleave", function () {
	 jQuery(this).find(".owl-arrow").fadeTo(150,0);
	 
  	})
	
	//  logo carousel hover
	jQuery("#logo-carousel img").on("mouseenter", function () {
	 jQuery(this).fadeTo(150,.5);
	}).on("mouseleave", function () {
	 jQuery(this).fadeTo(150,1);	 
  	})
	
	
	jQuery(window).load(function() {
			
	video_autosize();	
		
// --------------------------------------------------
// filtering gallery
// --------------------------------------------------
	var $container = jQuery('#gallery');
		$container.isotope({
			itemSelector: '.item',
			filter: '*'
	});
	jQuery('#filters a').on("click", function() {
		var $this = jQuery(this);
		if ( $this.hasClass('selected') ) {
			return false;
			}
		var $optionSet = $this.parents();
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected');
				
		var selector = jQuery(this).attr('data-filter');
		$container.isotope({ 
		filter: selector
	});
	return false;
	});
		
	
// --------------------------------------------------
// revolution slider
// --------------------------------------------------
	var revapi;

  	revapi = jQuery('#revolution-slider').revolution({
	delay:15000,
	startwidth:1170,
	startheight:500,
	hideThumbs:10,
	fullWidth:"off",
	fullScreen:"on",
	fullScreenOffsetContainer: "",
	touchenabled:"on",
	navigationType:"none",
    dottedOverlay:""
	});
	

// --------------------------------------------------
// tabs
// --------------------------------------------------
	jQuery('.de_tab').find('.de_tab_content div').hide();
	jQuery('.de_tab').find('.de_tab_content div:first').show();
	jQuery('li').find('.v-border').fadeTo(150,0);
	jQuery('li.active').find('.v-border').fadeTo(150,1);
	
	jQuery('.de_nav li').click(function() {
		jQuery(this).parent().find('li').removeClass("active");
		jQuery(this).addClass("active");
		jQuery(this).parent().parent().find('.v-border').fadeTo(150,0);
		jQuery(this).parent().parent().find('.de_tab_content div').hide();
	
		var indexer = jQuery(this).index(); //gets the current index of (this) which is #nav li
		jQuery(this).parent().parent().find('.de_tab_content div:eq(' + indexer + ')').fadeIn(); //uses whatever index the link has to open the corresponding box 
		jQuery(this).find('.v-border').fadeTo(150,1);
	});
	
	
// --------------------------------------------------
// tabs
// --------------------------------------------------
	jQuery('.de_review').find('.de_tab_content div').hide();
	jQuery('.de_review').find('.de_tab_content div:first').show();
	//jQuery('.de_review').find('.de_nav li').fadeTo(150,.5);
	jQuery('.de_review').find('.de_nav li:first').fadeTo(150,1);
	
	jQuery('.de_nav li').click(function() {
		jQuery(this).parent().find('li').removeClass("active");
		//jQuery(this).parent().find('li').fadeTo(150,.5);
		jQuery(this).addClass("active");
		jQuery(this).fadeTo(150,1);	
		jQuery(this).parent().parent().find('.de_tab_content div').hide();
	
		var indexer = jQuery(this).index(); //gets the current index of (this) which is #nav li
		jQuery(this).parent().parent().find('.de_tab_content div:eq(' + indexer + ')').show(); //uses whatever index the link has to open the corresponding box 
	});
	
	
// --------------------------------------------------
// toggle
// --------------------------------------------------
	jQuery(".toggle-list h2").addClass("acc_active");
	jQuery(".toggle-list h2").toggle(
	function() {
	 jQuery(this).addClass("acc_noactive");
     jQuery(this).next(".ac-content").slideToggle(200);
	},
    function() {
	 jQuery(this).removeClass("acc_noactive").addClass("acc_active");
	 jQuery(this).next(".ac-content").slideToggle(200);
  	})
	
	var mb;
	
	// --------------------------------------------------
	// navigation for mobile
	// --------------------------------------------------
	
	
	
	jQuery('#menu-btn').on("click", function() {
		if(mobile_menu_show==0){
			jQuery('#mainmenu').slideDown();
			mobile_menu_show = 1;
		}else{
			jQuery('#mainmenu').slideUp();
			mobile_menu_show = 0;			
		}
	})
	
// one page navigation
	      /**
         * This part causes smooth scrolling using scrollto.js
         * We target all a tags inside the nav, and apply the scrollto.js to it.
         */
		 
        jQuery("#homepage nav a").click(function(evn){
			
			if (this.href.indexOf('#') != -1) {
            evn.preventDefault();
            jQuery('html,body').scrollTo(this.hash, this.hash); 
			}
        });
		
		jQuery("a.btn").click(function(evn){
			
			if (this.href.indexOf('#') != -1) {
            evn.preventDefault();
            jQuery('html,body').scrollTo(this.hash, this.hash); 
			}
        });
		
		jQuery('.de-gallery .item .icon-info').on("click", function() {
			jQuery('.page-overlay').show();
			url = jQuery(this).attr("data-value");
			
			jQuery("#loader-area .project-load").load(url, function() {
			jQuery("#loader-area").slideDown(500,function(){
				jQuery('.page-overlay').hide();
			jQuery('html, body').animate({
				scrollTop: jQuery('#loader-area').offset().top - 70
			}, 500, 'easeOutCirc');
			
		//
			
			jQuery(".image-slider").owlCarousel({
			items : 1,
			singleItem:true,	
			navigation : false,
			pagination : true,
			autoPlay : false
			});
			
			jQuery(".container").fitVids();
			
			jQuery('#btn-close-x').on("click", function() {
			jQuery("#loader-area").slideUp(500,function(){
			jQuery('html, body').animate({				
				scrollTop: jQuery('#section-portfolio').offset().top - 70
			}, 500, 'easeOutCirc');
			});

			return false;			
				
				});  
			
			});			
		}); 
		});   
		
		jQuery('.de-gallery .item').on("click", function() {
			$('#navigation').show();
		});
		

// --------------------------------------------------
// custom page with background on side
// --------------------------------------------------
	jQuery('.side-bg').each(function(){	
		jQuery(this).find(".image-container").css("height",jQuery(this).find(".image-container").parent().css("height"));
	});
		
	var target = $('.center-y');
	var targetHeight = target.outerHeight();
	
	$(document).scroll(function(e){
		var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
		if(scrollPercent >= 0){
			target.css('opacity', scrollPercent);
		}
	});
	
	jQuery(document).scroll(function() {
		jQuery('#homepage nav li a').each(function(){
			if (this.href.indexOf('#') != -1) {
			var href = jQuery(this).attr('href');
				if(jQuery(window).scrollTop() > jQuery(href).offset().top - 140){
					jQuery('nav li a').removeClass('active');
					jQuery(this).addClass('active');
				}
			}
		});
		
	});
});

	
// --------------------------------------------------
// css animation
// --------------------------------------------------
	var v_count = '0';

	jQuery(window).load(function() {
				
		jQuery('.animated').fadeTo(0,0);
		jQuery('.animated').each(function(){
		var imagePos = jQuery(this).offset().top;
		var timedelay = jQuery(this).attr('data-delay');
		
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+300) {
				jQuery(this).fadeTo(1,500);
				var $anim = jQuery(this).attr('data-animation');
			}
		});
		
		
		// btn arrow up
		jQuery(".arrow-up").on("click", function() {
			jQuery(".coming-soon .coming-soon-content").fadeOut("medium",function(){
				jQuery("#hide-content").fadeIn(600,function(){
					jQuery('.arrow-up').animate({'bottom': '-40px' },"slow");
					jQuery('.arrow-down').animate({'top': '0' },"slow");
				});
			});
		});
		
		// btn arrow down
		jQuery(".arrow-down").on("click", function() {
			jQuery("#hide-content").fadeOut("slow",function(){
				jQuery(".coming-soon .coming-soon-content").fadeIn(800,function(){
					jQuery('.arrow-up').animate({'bottom': '0px' },"slow");
					jQuery('.arrow-down').animate({'top': '-40' },"slow");
				});
			});
		});
		
		// isotope
		jQuery('#gallery').isotope('reLayout');

	});
		
	jQuery(window).scroll(function() {
		
// --------------------------------------------------
// counter
// --------------------------------------------------
	
		jQuery('.timer').each(function(){
		var imagePos = jQuery(this).offset().top;
				
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+500 && v_count=='0') {		

					  jQuery(function ($) {

					  // start all the timers
					  jQuery('.timer').each(count);
					  
					  
					  function count(options) {
					 	v_count = '1';
						var $this = jQuery(this);
						options = $.extend({}, options || {}, $this.data('countToOptions') || {});
						$this.countTo(options);
					  }
					});
					
				}
			});
		
// --------------------------------------------------
// progress bar
// --------------------------------------------------
		jQuery('.de-progress').each(function(){
		var pos_y = jQuery(this).offset().top;
		var value = jQuery(this).find(".progress-bar").attr('data-value');
		
		var topOfWindow = jQuery(window).scrollTop();
			if (pos_y < topOfWindow+500) {		
				jQuery(this).find(".progress-bar").animate({'width': value },"slow");
			}
		});
	
	
		jQuery('.animated').each(function(){
		var imagePos = jQuery(this).offset().top;
		var timedelay = jQuery(this).attr('data-delay');
		
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+500) {		
				jQuery(this).delay(timedelay).queue(function(){
					jQuery(this).fadeTo(1,500);
					var $anim = jQuery(this).attr('data-animation');
					jQuery(this).addClass($anim).clearQueue();
				});
				
			}
		});
		
		jQuery(".nav-exit").on("click", function() {
			$.magnificPopup.close();
        });

		
		
	
	});
});

