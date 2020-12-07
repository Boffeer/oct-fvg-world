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
	// const displacementSlider = function(opts) {

	//     let vertex = `
	//         varying vec2 vUv;
	//         void main() {
	//           vUv = uv;
	//           gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
	//         }
	//     `;

	//     let fragment = `
	        
	//         varying vec2 vUv;

	//         uniform sampler2D currentImage;
	//         uniform sampler2D nextImage;

	//         uniform float dispFactor;

	//         void main() {

	//             vec2 uv = vUv;
	//             vec4 _currentImage;
	//             vec4 _nextImage;
	//             float intensity = 0.3;

	//             vec4 orig1 = texture2D(currentImage, uv);
	//             vec4 orig2 = texture2D(nextImage, uv);
	            
	//             _currentImage = texture2D(currentImage, vec2(uv.x, uv.y + dispFactor * (orig2 * intensity)));

	//             _nextImage = texture2D(nextImage, vec2(uv.x, uv.y + (1.0 - dispFactor) * (orig1 * intensity)));

	//             vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);

	//             gl_FragColor = finalTexture;

	//         }
	//     `;

	//     let images = opts.images, image, sliderImages = [];
	//     let canvasWidth = images[0].clientWidth;
	//     let canvasHeight = images[0].clientHeight;
	//     let parent = opts.parent;
	//     let renderWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	//     let renderHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	//     let renderW, renderH;

	//     if( renderWidth > canvasWidth ) {
	//         renderW = renderWidth;
	//     } else {
	//         renderW = canvasWidth;
	//     }

	//     renderH = canvasHeight;

	//     let renderer = new THREE.WebGLRenderer({
	//         antialias: false,
	//     });

	//     renderer.setPixelRatio( window.devicePixelRatio );
	//     renderer.setClearColor( 0x23272A, 1.0 );
	//     renderer.setSize( renderW, renderH );
	//     parent.appendChild( renderer.domElement );

	//     let loader = new THREE.TextureLoader();
	//     loader.crossOrigin = "anonymous";

	//     images.forEach( ( img ) => {

	//         image = loader.load( img.getAttribute( 'src' ) + '?v=' + Date.now() );
	//         image.magFilter = image.minFilter = THREE.LinearFilter;
	//         image.anisotropy = renderer.capabilities.getMaxAnisotropy();
	//         sliderImages.push( image );

	//     });

	//     let scene = new THREE.Scene();
	//     scene.background = new THREE.Color( 0x23272A );
	//     let camera = new THREE.OrthographicCamera(
	//         renderWidth / -2,
	//         renderWidth / 2,
	//         renderHeight / 2,
	//         renderHeight / -2,
	//         1,
	//         1000
	//     );

	//     camera.position.z = 1;

	//     let mat = new THREE.ShaderMaterial({
	//         uniforms: {
	//             dispFactor: { type: "f", value: 0.0 },
	//             currentImage: { type: "t", value: sliderImages[0] },
	//             nextImage: { type: "t", value: sliderImages[1] },
	//         },
	//         vertexShader: vertex,
	//         fragmentShader: fragment,
	//         transparent: true,
	//         opacity: 1.0
	//     });

	//     let geometry = new THREE.PlaneBufferGeometry(
	//         parent.offsetWidth,
	//         parent.offsetHeight,
	//         1
	//     );
	//     let object = new THREE.Mesh(geometry, mat);
	//     object.position.set(0, 0, 0);
	//     scene.add(object);

	//     let addEvents = function(){

	//         let pagButtons = Array.from(document.getElementById('pagination').querySelectorAll('button'));
	//         let isAnimating = false;

	//         pagButtons.forEach( (el) => {

	//             el.addEventListener('click', function() {

	//                 if( !isAnimating ) {

	//                     isAnimating = true;

	//                     document.getElementById('pagination').querySelectorAll('.active')[0].className = '';
	//                     this.className = 'active';

	//                     let slideId = parseInt( this.dataset.slide, 10 );

	//                     mat.uniforms.nextImage.value = sliderImages[slideId];
	//                     mat.uniforms.nextImage.needsUpdate = true;

	//                     TweenLite.to( mat.uniforms.dispFactor, 1, {
	//                         value: 1,
	//                         ease: 'Expo.easeInOut',
	//                         onComplete: function () {
	//                             mat.uniforms.currentImage.value = sliderImages[slideId];
	//                             mat.uniforms.currentImage.needsUpdate = true;
	//                             mat.uniforms.dispFactor.value = 0.0;
	//                             isAnimating = false;
	//                         }
	//                     });

	//                     let slideTitleEl = document.getElementById('slide-title');
	//                     let slideStatusEl = document.getElementById('slide-status');
	//                     let nextSlideTitle = document.querySelectorAll(`[data-slide-title="${slideId}"]`)[0].innerHTML;
	//                     let nextSlideStatus = document.querySelectorAll(`[data-slide-status="${slideId}"]`)[0].innerHTML;

	//                     TweenLite.fromTo( slideTitleEl, 0.5,
	//                         {
	//                             autoAlpha: 1,
	//                             filter: 'blur(0px)',
	//                             y: 0
	//                         },
	//                         {
	//                             autoAlpha: 0,
	//                             filter: 'blur(10px)',
	//                             y: 20,
	//                             ease: 'Expo.easeIn',
	//                             onComplete: function () {
	//                                 slideTitleEl.innerHTML = nextSlideTitle;

	//                                 TweenLite.to( slideTitleEl, 0.5, {
	//                                     autoAlpha: 1,
	//                                     filter: 'blur(0px)',
	//                                     y: 0,
	//                                 })
	//                             }
	//                         });

	//                     TweenLite.fromTo( slideStatusEl, 0.5,
	//                         {
	//                             autoAlpha: 1,
	//                             filter: 'blur(0px)',
	//                             y: 0
	//                         },
	//                         {
	//                             autoAlpha: 0,
	//                             filter: 'blur(10px)',
	//                             y: 20,
	//                             ease: 'Expo.easeIn',
	//                             onComplete: function () {
	//                                 slideStatusEl.innerHTML = nextSlideStatus;

	//                                 TweenLite.to( slideStatusEl, 0.5, {
	//                                     autoAlpha: 1,
	//                                     filter: 'blur(0px)',
	//                                     y: 0,
	//                                     delay: 0.1,
	//                                 })
	//                             }
	//                         });

	//                 }

	//             });

	//         });

	//     };

	//     addEvents();

	//     window.addEventListener( 'resize' , function(e) {
	//         renderer.setSize(renderW, renderH);
	//     });

	//     let animate = function() {
	//         requestAnimationFrame(animate);

	//         renderer.render(scene, camera);
	//     };
	//     animate();
	// };

	// imagesLoaded( document.querySelectorAll('img'), () => {

	//     document.body.classList.remove('loading');

	//     const el = document.getElementById('slider');
	//     const imgs = Array.from(el.querySelectorAll('img'));
	//     new displacementSlider({
	//         parent: el,
	//         images: imgs
	//     });

	// });


	// var sliderBegin = 1,
	// 	sliderEnd = 3;

	// var slidePos = sliderBegin,
	// 	heroSliding = setInterval(() => {
	// 		// $('.slider_controller[data'+slidePos).trigger( "click" );
	// 		$('#slider_controller-'+slidePos).trigger( "click" );
	// 		slidePos++;
	// 		console.log(slidePos)
	// 		if(slidePos == sliderEnd){slidePos = sliderBegin}
	// 		// heroSliding;
	// 	}, 5000);

const displacementSlider = function(opts) {

    let vertex = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `;

    let fragment = `
        
        varying vec2 vUv;

        uniform sampler2D currentImage;
        uniform sampler2D nextImage;

        uniform float dispFactor;

        void main() {

            vec2 uv = vUv;
            vec4 _currentImage;
            vec4 _nextImage;
            float intensity = 0.3;

            vec4 orig1 = texture2D(currentImage, uv);
            vec4 orig2 = texture2D(nextImage, uv);
            
            _currentImage = texture2D(currentImage, vec2(uv.x, uv.y + dispFactor * (orig2 * intensity)));

            _nextImage = texture2D(nextImage, vec2(uv.x, uv.y + (1.0 - dispFactor) * (orig1 * intensity)));

            vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);

            gl_FragColor = finalTexture;

        }
    `;

    let images = opts.images, 
    	image, 
    	sliderImages = [];
    let canvasWidth = images[0].clientWidth;
    let canvasHeight = images[0].clientHeight;
    let parent = opts.parent;
    let renderWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let renderHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    let renderW, renderH;

    if( renderWidth > canvasWidth ) {
        renderW = renderWidth;
    } else {
        renderW = canvasWidth;
    }

    renderH = canvasHeight;

    let renderer = new THREE.WebGLRenderer({
        antialias: false,
    });

    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setClearColor( 0x23272A, 1.0 );
    renderer.setSize( renderW, renderH );
    parent.appendChild( renderer.domElement );

    let loader = new THREE.TextureLoader();
    loader.crossOrigin = "anonymous";

    images.forEach( ( img ) => {

        image = loader.load( img.getAttribute( 'src' ) + '?v=' + Date.now() );
        image.magFilter = image.minFilter = THREE.LinearFilter;
        image.anisotropy = renderer.capabilities.getMaxAnisotropy();
        sliderImages.push( image );

    });

    let scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x23272A );
    let camera = new THREE.OrthographicCamera(
        renderWidth / -2,
        renderWidth / 2,
        renderHeight / 2,
        renderHeight / -2,
        1,
        1000
    );

    camera.position.z = 1;

    let mat = new THREE.ShaderMaterial({
        uniforms: {
            dispFactor: { type: "f", value: 0.0 },
            currentImage: { type: "t", value: sliderImages[0] },
            nextImage: { type: "t", value: sliderImages[1] },
        },
        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: true,
        opacity: 1.0
    });

    let geometry = new THREE.PlaneBufferGeometry(
        parent.offsetWidth,
        parent.offsetHeight,
        1
    );
    let object = new THREE.Mesh(geometry, mat);
    object.position.set(0, 0, 0);
    scene.add(object);

    let addEvents = function(){

        let pagButtons = Array.from(document.getElementById('pagination').querySelectorAll('button'));
        let isAnimating = false;

        pagButtons.forEach( (el) => {

            el.addEventListener('click', function() {

                if( !isAnimating ) {

                    isAnimating = true;

                    document.getElementById('pagination').querySelectorAll('.active')[0].className = '';
                    this.className = 'active';

                    let slideId = parseInt( this.dataset.slide, 10 );

                    mat.uniforms.nextImage.value = sliderImages[slideId];
                    mat.uniforms.nextImage.needsUpdate = true;

                    TweenLite.to( mat.uniforms.dispFactor, 1, {
                        value: 1,
                        ease: 'Expo.easeInOut',
                        onComplete: function () {
                            mat.uniforms.currentImage.value = sliderImages[slideId];
                            mat.uniforms.currentImage.needsUpdate = true;
                            mat.uniforms.dispFactor.value = 0.0;
                            isAnimating = false;
                        }
                    });

                    let slideTitleEl = document.getElementById('slide-title');
                    let slideStatusEl = document.getElementById('slide-status');
                    let nextSlideTitle = document.querySelectorAll(`[data-slide-title="${slideId}"]`)[0].innerHTML;
                    let nextSlideStatus = document.querySelectorAll(`[data-slide-status="${slideId}"]`)[0].innerHTML;

                    TweenLite.fromTo( slideTitleEl, 0.5,
                        {
                            autoAlpha: 1,
                            filter: 'blur(0px)',
                            y: 0
                        },
                        {
                            autoAlpha: 0,
                            filter: 'blur(10px)',
                            y: 20,
                            ease: 'Expo.easeIn',
                            onComplete: function () {
                                slideTitleEl.innerHTML = nextSlideTitle;

                                TweenLite.to( slideTitleEl, 0.5, {
                                    autoAlpha: 1,
                                    filter: 'blur(0px)',
                                    y: 0,
                                })
                            }
                        });

                    TweenLite.fromTo( slideStatusEl, 0.5,
                        {
                            autoAlpha: 1,
                            filter: 'blur(0px)',
                            y: 0
                        },
                        {
                            autoAlpha: 0,
                            filter: 'blur(10px)',
                            y: 20,
                            ease: 'Expo.easeIn',
                            onComplete: function () {
                                slideStatusEl.innerHTML = nextSlideStatus;

                                TweenLite.to( slideStatusEl, 0.5, {
                                    autoAlpha: 1,
                                    filter: 'blur(0px)',
                                    y: 0,
                                    delay: 0.1,
                                })
                            }
                        });

                }

            });

        });

    };

    addEvents();

    window.addEventListener( 'resize' , function(e) {
        renderer.setSize(renderW, renderH);
    });

    let animate = function() {
        requestAnimationFrame(animate);

        renderer.render(scene, camera);
    };
    animate();
};

imagesLoaded( document.querySelectorAll('.hero-slider-pic'), () => {

    document.body.classList.remove('loading');

    const el = document.getElementById('slider');
    const imgs = Array.from(el.querySelectorAll('.hero-slider-pic'));
    // const imgs = el.querySelectorAll('.hero-slider-pic');
    // const imgs = Array.from(el.querySelectorAll('img'));
    new displacementSlider({
        parent: el,
        images: imgs
    });

});


if ($(window).width() > 480){
	var sliderBegin = 1,
		sliderEnd = 4;
} else {
	var sliderBegin = 5,
		sliderEnd = 8;
}

var slidePos = sliderBegin,
	heroSliding = setInterval(() => {
		// $('.slider_controller[data'+slidePos).trigger( "click" );
		$('#slider_controller-'+slidePos).trigger( "click" );
		slidePos++;
		console.log(slidePos)
		if(slidePos == sliderEnd){slidePos = sliderBegin}
		// heroSliding;
	}, 5000);

// $('canvas').css({"transform": "scale(0.5) translate(-50%, -50%)"})





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
				centerMode: true
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: false,
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
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true
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

	$('.js-footer-slider').slick({
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
		$('.hero-fulscreen-menu-wrap').fadeToggle()
		// var caseNumber = $(this).data('case-number');
		// $('.case-modal_wrap--'+caseNumber).toggle()
		$('.callback-pop_wrap').fadeToggle()
	})
	$('.pop_close-btn').click(function(){
		let popName = $(this).data('pop');
		$('.'+popName + '-pop_wrap').fadeOut()
	})

	$('.services-more').click(function(){
		let service = $(this).data('service')
		$('.input-callback').val(service).change()
		console.log($('.input-callback').val())
		$('.callback-pop_wrap').fadeIn()
	})

	$('.bonus-btn').click(function(){
		let bonus = $(this).data('button')
		$('.input-callback').val(bonus).change()
		$('.callback-pop_wrap').fadeIn()
	})
	$('.case-btn').click(function(){
		let button = $(this).data('button')
		$('.input-callback').val(button).change()
		$('.callback-pop_wrap').fadeIn()
	})
	$('.timer-btn').click(function(){
		let button = $(this).data('button')
		$('.input-callback').val(button).change()
		$('.callback-pop_wrap').fadeIn()
	})

	// togglers
	$('.hero-menu-btn').click(function(){
		$('.hero-fulscreen-menu-wrap').fadeToggle()
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
		confetti.start(500, 200, 200);
		counterCounter = 1;
	}
})








});



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



let comfort4Scrolled = 0;
let comfort3Scrolled = 0;
let comfort2Scrolled = 0;
// title scrollers
window.addEventListener("optimizedScroll", function(){
	$(window).scroll(function(){
		// var counterContainer = $(counterContainer)
		let counterContainer = $('.comfort-item--4'),
				counterScroll = $(window).scrollTop() + $(window).height() - 200,
				counterOffset = counterContainer.offset().top;

		if (counterScroll > counterOffset && comfort4Scrolled == 0) {
			$('.comfort-item--4 .comfort__text').css({'transform': 'translateX(0)'})
			comfort4Scrolled = 1;
		}
	})
		$(window).scroll(function(){
		// var counterContainer = $(counterContainer)
		let counterContainer = $('.comfort-item--3'),
				counterScroll = $(window).scrollTop() + $(window).height(),
				counterOffset = counterContainer.offset().top;

		if (counterScroll > counterOffset && comfort3Scrolled == 0) {
			$('.comfort-item--3 .comfort__text').css({'transform': 'translateX(0)'})
			if (document.body.clientWidth < 480){
				$('.comfort-item--3 .comfort__pic').css({'opacity': '0'})
				$('.comfort-item--2').css({'margin-bottom': '62px'})
			}
			comfort3Scrolled = 1;
		}
	})	
		$(window).scroll(function(){
		// var counterContainer = $(counterContainer)
		let counterContainer = $('.comfort-item--2'),
				counterScroll = $(window).scrollTop() + $(window).height(),
				counterOffset = counterContainer.offset().top;

		if (counterScroll > counterOffset && comfort2Scrolled == 0) {
			$('.comfort-item--2 .comfort__text').css({'transform': 'translateX(0)'})
			comfort2Scrolled = 1;
		}
	})




	const pixels = window.pageYOffset
	const pageHeight = bodyTag.getBoundingClientRect().height
	const totalHeight = pageHeight - window.innerHeight
	const percentage = pixels / totalHeight

	if (window.pageYOffset < 1400){
		function offerMoveLeft($id){
			document.querySelector($id).style.transform = 'translateX(-' + window.pageYOffset * 0.65 + 'px)';
		}
		offerMoveLeft('.offer')

		function superLogoMove(){
			// document.querySelector('.c-hero-super-logo').style.transform = 'translateY(-' + window.pageYOffset * 0.55 + 'px)';
			// document.querySelector('.c-hero-super-logo').style.transform = 'scale(' + 1. + 0.2 * window.pageYOffset + ')';
			document.querySelector('.c-hero-super-logo').style.transform = 'scale(' + '1.' + window.pageYOffset + ')';
			document.querySelector('.c-hero-super-logo').style.transform = 'scale(' + '1.' + window.pageYOffset + ')';
			// попробуй скейл ап
		}
		function heroBgMoving(){
			document.querySelector('canvas').style.transform = 'translateX(' + window.pageYOffset * 0.55 + 'px)';
			document.querySelector('canvas').style.transition = 'all 0.5s';

			// попробуй скейлдаун
		}
		function heroContactsMove(){
			document.querySelector('.hero-contacts').style.transform = 'translate(' + window.pageYOffset * 0.55 + 'px, ' + window.pageYOffset * 0.55 + 'px)';
		}
		offerMoveLeft('.offer')
		superLogoMove()
		heroContactsMove()
	}



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
	animTitle('footer');


	// progressTag.style.width = `${100 * percentage}%`

	if ((pixels > 0) && ($('.progress-ring__circle').attr('stroke') !== '#FF1214')) {
		// progressText.innerHTML = `${Math.floor(100 * percentage)}` + '%';
		$('.hero-menu-hor').addClass('hero-menu-hor--active');
		$('.hero-menu-ver').addClass('hero-menu-ver--active');
	}

	if (pixels == 0) {
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
		circle.style.opacity = '1';
		const offset = circumference - percent / 100 * circumference;
		circle.style.strokeDashoffset = offset;
	}
	setProgress(percentage * 100)

	// if (pixels > 50){
	// 	heroScroll()
	// }











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



let rowsToHover = [
	$('.services .rolling-title__item'),
	$('.work .rolling-title__item'),
	$('.bonus .rolling-title__item'),
	$('.cases-title .rolling-title__item'),
	$('.comfort .rolling-title__item'),
	$('.testimonials .rolling-title__item'),
	$('.footer-title .rolling-title__item'),
];

let titlesToHover = [
	$('.services .rolling-title-row--2 .rolling-title__item-6'),
	$('.work .rolling-title-row--2 .rolling-title__item-3'),
	$('.cases .rolling-title-row--2 .rolling-title__item-5'),
	$('.bonus .rolling-title-row--2 .rolling-title__item-2'),
	$('.comfort .rolling-title-row--2 .rolling-title__item-2'),
	$('.reviews .rolling-title-row--2 .rolling-title__item-4'),
	$('.footer-title .rolling-title-row--2 .rolling-title__item-2'),
];


titlesToHover.forEach(function(item, i, titlesToHover){
	item.addClass('first-active-title');
});


titlesToHover.forEach(function(item, i, titlesToHover){
	item.parent().parent().find('h2').mouseover(function(){
		rowsToHover[i].removeClass('first-active-title');
	});

});



var heroSvgDesk = $('#hero-super-logo--desktop').drawsvg({
	duration: 3000,
	easing: 'linear'
});
var heroSvgMob = $('#hero-super-logo--mobile').drawsvg({
	duration: 2500,
	easing: 'linear'
});
let isScrolled = false;
function heroScroll() {
	$('.c-hero-super-logo').fadeOut(400)
	$('.hero-content').slideUp(800)
	if(!isScrolled){
		location.assign(location.href + '#start')
		isScrolled = true;
		location.assign(location.href)
	}
	$('.hero-container').fadeOut(800)
}

 setTimeout(function() {
  	$(".preloader").fadeOut();
  }, 300)
heroSvgDesk.drawsvg('animate');
heroSvgMob.drawsvg('animate');

