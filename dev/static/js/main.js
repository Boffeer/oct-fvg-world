/*! jQuery DrawSVG v1.1.0 (2016-10-05) - git.io/vGFa5 - Copyright (c) 2016 Leonardo Santos - MIT License */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=function(e,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(e)),t(n),n}:t(jQuery)}(function(t){"use strict";var e="drawsvg",n={duration:1e3,stagger:200,easing:"swing",reverse:!1,callback:t.noop},a=function(){var a=function(a,o){var i=this,r=t.extend(n,o);i.$elm=t(a),i.$elm.is("svg")&&(i.options=r,i.$paths=i.$elm.find("path"),i.totalDuration=r.duration+r.stagger*i.$paths.length,i.duration=r.duration/i.totalDuration,i.$paths.each(function(t,e){var n=e.getTotalLength();e.pathLen=n,e.delay=r.stagger*t/i.totalDuration,e.style.strokeDasharray=[n,n].join(" "),e.style.strokeDashoffset=n}),i.$elm.attr("class",function(t,n){return[n,e+"-initialized"].join(" ")}))};return a.prototype.getVal=function(e,n){return 1-t.easing[n](e,e,0,1,1)},a.prototype.progress=function(t){var e=this,n=e.options,a=e.duration;e.$paths.each(function(o,i){var r=i.style;if(1===t)r.strokeDashoffset=0;else if(0===t)r.strokeDashoffset=i.pathLen+"px";else if(t>=i.delay&&t<=a+i.delay){var s=(t-i.delay)/a;r.strokeDashoffset=e.getVal(s,n.easing)*i.pathLen*(n.reverse?-1:1)+"px"}})},a.prototype.animate=function(){var n=this;n.$elm.attr("class",function(t,n){return[n,e+"-animating"].join(" ")}),t({len:0}).animate({len:1},{easing:"linear",duration:n.totalDuration,step:function(t,e){n.progress.call(n,t/e.end)},complete:function(){n.options.callback.call(this),n.$elm.attr("class",function(t,n){return n.replace(e+"-animating","")})}})},a}();t.fn[e]=function(n,o){return this.each(function(){var i=t.data(this,e);i&&""+n===n&&i[n]?i[n](o):t.data(this,e,new a(this,n))})}});


$(document).ready(function () {
	$("a").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({ scrollTop: destination }, 600);
		return false;
	});

	AOS.init({
		duration: 600,
	});

	svg4everybody({});


	// sliders
	$('.hero-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		lazyLoad: 'progressive',
		fade:true,
		cssEase: 'linear',
	})


	// $('.cases-wrap').slick({
	// 	centerMode: true,
	// 	infinite: false,
	// 	slidesToShow: 2,
	// 	slidesToScroll: 2,
	// 	dots: true,
	// 	arrows: false,
	// 	centerPadding: '40px',
	// 	// mobileFirst: true,
	// 	responsive:
	// 	[
	// 	{
	// 		breakpoint: 1260,
	// 		settings: {
	// 			slidesToShow: 1.8,
	// 			slidesToScroll: 1,

	// 		}
	// 	},
	// 	{
	// 		breakpoint: 480,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1
	// 		}
	// 	},
	// 	]
	// })


	$('.reviews-list').slick({
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		// mobileFirst: true,
		responsive:
		[
		{
			breakpoint: 1260,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 370,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		]
	})
	$('.cases-wrap').slick({
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		// mobileFirst: true,
		responsive:
		[
		{
			breakpoint: 1260,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		]
	})

	$('.footer-slider').slick({
	    centerMode: true,
	    // centerPadding: '144px',
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    infinite: false,
	    dots: true,
	    arrows: true,
	    swipeToSlide: true,
	    nextArrow: '<svg class="slick-next" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.78" d="M28.2844 3L56.5687 31.2843L28.2844 59.5685" stroke="white" stroke-width="8"/></svg>',
	    prevArrow: '<svg class="slick-prev" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.2843 3L6.00003 31.2843L34.2843 59.5685" stroke="white" stroke-width="8"/></svg>',
	    responsive:[{
	        breakpoint: 480,
	        settings: {
	            centerMode: false,
	            arrows: false
	        },
	    }],
	})
$('.hero-fullscreen-menu__cta').click(function(){
		let button = $(this).data('button')
		$('.input-callback').val(button).change()
		$('.hero-fulscreen-menu-wrap').slideToggle()
		// var caseNumber = $(this).data('case-number');
		// $('.case-modal_wrap--'+caseNumber).toggle()
		$('.callback-pop_wrap').slideToggle()
	})
	$('.pop_close-btn').click(function(){
		let popName = $(this).data('pop');
		$('.'+popName + '-pop_wrap').slideUp()
	})

	$('.services-more').click(function(){
		let service = $(this).data('service')
		$('.input-callback').val(service).change()
		console.log($('.input-callback').val())
		$('.callback-pop_wrap').slideDown()
	})

	$('.bonus-btn').click(function(){
		let bonus = $(this).data('button')
		$('.input-callback').val(bonus).change()
		$('.callback-pop_wrap').slideDown()
	})
	$('.case-btn').click(function(){
		let button = $(this).data('button')
		$('.input-callback').val(button).change()
		$('.callback-pop_wrap').slideDown()
	})
	$('.timer-btn').click(function(){
		let button = $(this).data('button')
		$('.input-callback').val(button).change()
		$('.callback-pop_wrap').slideDown()
	})

	// togglers
	$('.hero-menu-btn').click(function(){
		$('.hero-fulscreen-menu-wrap').slideToggle()
		$('.hero-menu-hor').addClass('hero-menu-hor--active');
		$('.hero-menu-ver').addClass('hero-menu-ver--active');
		console.log(this)

		// if ($('.hero-fulscreen-menu-wrap').css('display') == 'none'){
			if ($('.progress-ring__circle').attr('stroke') !== '#FF1214'){
				$('.progress-ring__circle').attr('stroke', '#FF1214')

			} else {
				$('.progress-ring__circle').attr('stroke', '#FFFFFF')
			}
		})



let counterCounter = 0;
$(window).scroll(function(){
	// var counterContainer = $(counterContainer)
	let counterContainer = $('.confetti'),
			counterScroll = $(window).scrollTop() + $(window).height(),
			counterOffset = counterContainer.offset().top;

	if (counterScroll > counterOffset && counterCounter == 0) {
		confetti.start(1200, 200, 500);
		counterCounter = 1;
	}
})





});

	// hero
	var heroSvgDesk = $('#hero-super-logo--desktop').drawsvg({
		duration: 2500,
		easing: 'linear'
	});
	heroSvgDesk.drawsvg('animate');
	var heroSvgMob = $('#hero-super-logo--mobile').drawsvg({
		duration: 2500,
		easing: 'linear'
	});
	heroSvgMob.drawsvg('animate');

// titles
;(function(){

	var throttle = function(type, name, obj){
		var obj = obj || window;
		var running = false;
		var func = function(){
			if (running){ return; }
			running = true;
			requestAnimationFrame(function(){
				obj.dispatchEvent(new CustomEvent(name));
				running = false;
			});
		};
		obj.addEventListener(type, func);
	};

	throttle("scroll", "optimizedScroll");
})();


const progressTag = document.querySelector('.hero-menu-btn')
const progressText = document.querySelector('.hero-menu-btn')
const bodyTag = document.querySelector('body')


// title scrollers
window.addEventListener("optimizedScroll", function(){
	const pixels = window.pageYOffset
	const pageHeight = bodyTag.getBoundingClientRect().height
	const totalHeight = pageHeight - window.innerHeight
	const percentage = pixels / totalHeight



	function lTr($idid){document.querySelector($idid).style.transform = "translate(-" + window.pageYOffset*0.0365 + "px","0)";}
	function rTr($idid){document.querySelector($idid).style.transform = "translate(" + window.pageYOffset*0.0385 + "px","0)";}
	function lTr2($idid){document.querySelector($idid).style.transform = "translate(-" + window.pageYOffset*0.0255 + "px","0)";}

	function animT(t1, t2, t3){
		lTr(t1);
		rTr(t2);
		lTr2(t3);
	}

	function animTitle(section){
		animT('#'+section+'-title-row--1', '#'+section+'-title-row--2','#'+section+'-title-row--3');

	}
	animTitle('services');
	animTitle('work');
	animTitle('cases');
	animTitle('comfort');
	animTitle('reviews');
	animTitle('bonus');


	// progressTag.style.width = `${100 * percentage}%`

	if ((pixels > 0) && ($('.progress-ring__circle').attr('stroke') !== '#FF1214')) {
		// progressText.innerHTML = `${Math.floor(100 * percentage)}` + '%';
		$('.hero-menu-hor').addClass('hero-menu-hor--active');
		$('.hero-menu-ver').addClass('hero-menu-ver--active');
	}

	else {
		$('.hero-menu-hor').removeClass('hero-menu-hor--active');
		$('.hero-menu-ver').removeClass('hero-menu-ver--active');

		// progressText.innerHTML = ''
	}

	const circle = document.querySelector('.progress-ring__circle');
	const radius = circle.r.baseVal.value;
	const circumference = 2 * Math.PI * radius;

	circle.style.strokeDasharray = `${circumference} ${circumference}`;
	circle.style.strokeDashoffset = circumference;

	function setProgress(percent) {
		const offset = circumference - percent / 100 * circumference;
		circle.style.strokeDashoffset = offset;
	}
	setProgress(percentage * 100)











})

jQuery(document).ready(function ($) {

	$("form").submit(function () {
		var str = $(this).serialize();

		$.ajax({
			type: "POST",
			url: "static/php/contact.php",
			data: str,
			success: function ()
			{
				alert('Данные отправлены. Скоро мы перезвним')
			}
		}
		);
		return false;
	});
});



	function getTimeRemaining(endtime) {
	  var t = Date.parse(endtime) - Date.parse(new Date());
	  var seconds = Math.floor((t / 1000) % 60);
	  var minutes = Math.floor((t / 1000 / 60) % 60);
	  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	  var days = Math.floor(t / (1000 * 60 * 60 * 24));
	  return {
	    'total': t,
	    'days': days,
	    'hours': hours,
	    'minutes': minutes,
	    'seconds': seconds
	  };
	}

	function initializeClock(id, endtime) {
	  var clock = document.getElementById(id);
	  var daysSpan = clock.querySelector('.days');
	  var hoursSpan = clock.querySelector('.hours');
	  var minutesSpan = clock.querySelector('.minutes');
	  var secondsSpan = clock.querySelector('.seconds');

	  function updateClock() {
	    var t = getTimeRemaining(endtime);

	    daysSpan.innerHTML = t.days;
	    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
	    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
	    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

	    if (t.total <= 0) {
	      clearInterval(timeinterval);
	    }
	  }

	  updateClock();
	  var timeinterval = setInterval(updateClock, 1000);
	}

	var deadline="January 01 2021 00:00:00 GMT+0300";
	// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
	initializeClock('timer', deadline);



