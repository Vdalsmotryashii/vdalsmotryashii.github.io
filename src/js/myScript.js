"use strict"

new WOW().init();


//magnific-popup
// $(document).ready(function() {
  // $('.image-link').magnificPopup({
  	// type:'image',
  	// closeOnContentClick: true,
  // });

// });




//плавный скролл
//		$(document).ready(function(){
//			$("#menuID").on("click","a", function (event) {
//				event.preventDefault();

//				var id  = $(this).attr('href'),

//					top = $(id).offset().top;
				
//				$('body,html').animate({scrollTop: top}, 1000);
//			});
//		})




// анимация появления параграфа
$(document).ready(function(){
	let options = {threshold: [1]};
	let observer = new IntersectionObserver(onEntry, options);
	let elements = $('.element-animation');
	elements.each((i,el) => {
		observer.observe(el);
	});
 });
function onEntry (enrty){
	enrty.forEach(change => {
		if (change.isIntersecting){
			change.target.classList.add('show-animation');
		}
	});
};



// подсветка меню при скроле
//$(document).ready(function(){

//	$(window).scroll(() => {
//  	let scrollDistance = $(window).scrollTop();
//		$(".section").each((i, el) => {
//			if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
//				$("nav a").each((i, el) => {
//					if ($(el).hasClass("active")){
//						$(el).removeClass("active");
//					}
//					});
//				$('nav li:eq('+ i +')').find('a').addClass('active');
//				}
//		});
//	});
//	});






