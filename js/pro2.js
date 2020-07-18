/*global $,console,window */

$(function () {
	"use strict";
	
	// Resize the header to our window
	
	//$("header").height($(window).height());
	$(window).resize(function () {
		//$("header").height($(window).height());
		$("header .slider").each(function () {
			$(this).css({
				paddingTop: ($("header").height() - $(this).find("div").height()) / 2
			});
		});
	});
	
	// when click navbar li Smooth scroll & add class active
	
	$(".navbar ul li").on("click", function () {
		$(this).addClass("active").siblings().removeClass("active");
		$("html, body").animate({
			scrollTop: $("#" + $(this).data("value")).offset().top
		}, 1000);
	});
	
	// Make bxslider in the middle
	
	$("header .slider").each(function () {
		$(this).css({
			paddingTop: ($("header").height() - $(this).find("div").height()) / 2
		});
	});
	// Trigger .slider
	
	$('.slider').bxSlider({
		pager: false
	});
	
	// Any Section
	var windowTop = $(window).scrollTop();
	function scrollFun() {
		$("section").each(function () {
			var windowTop = $(window).scrollTop(),
				sectionTop = $(this).offset().top - 100,
				sectionHeight = $(this).height(),
				section = sectionTop + sectionHeight;
			if ((windowTop >= sectionTop) && (windowTop <= section)) {
				if ($(this).find("h3 span").width() == 0) {
					$(this).find("h3 span").animate({
						width: 100 + "%"
					}, 400);
				}
			} else {
				$(this).find("h3 span").css({
					width: 0
				});
			}
		});
	}
	scrollFun();
	$(window).on("scroll", scrollFun);
	
	// Section testimonials
	
	(function mySlider() {
		$(".testimonials .info .active").each(function () {
			if (!$(this).is(":last-child")) {
				$(this).fadeIn(1000).delay(3000).fadeOut(1000, function () {
					$(this).removeClass("active").next().addClass("active");
					mySlider();
				});
			} else {
				$(this).fadeIn(1000).delay(3000).fadeOut(1000, function () {
					$(this).removeClass("active").parent().find("div:first-of-type").addClass("active");
					mySlider();
				});
			}
		});
	}());
	// section works
	
	//Triger mixslider
	$("#Container").mixItUp();
	
	 // add class selected

	$(".works .navbar_works ul li").on("click", function () {
		$(this).addClass("selected").siblings().removeClass("selected");
	});
	
	
	// section contact us
		
	
	/*function fade1() {
		
		$(".call > div.active").each(function () {
			var contactTop = $("#our_contact").offset().top - 100,
				contactHeight = $("#our_contact").height(),
				contact = contactTop + contactHeight;
			if ((windowTop >= contactTop) && (windowTop <= contact)) {
				$(this).fadeIn(400, function () {
					$(this).removeClass("active").next().addClass("active");
					fade1();
				});
			} else {
				$(this).parent().children().fadeOut(400, function () {
					$(".call").first().addClass("active");
					fade1();
				});
			}
		});
	}
	//fade1();
	$(window).on("scroll", fade1);*/
	
	
	// Trigger nice scroll
	
	/*$("body").niceScroll({
		cursorcolor: "darkturquoise",
		cursorwidth: "10px",
		cursorborderradius: "none",
		cursorborder: "none",
		zindex: "9999",
		preventmultitouchscrolling: false
	});*/
	
});