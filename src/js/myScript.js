"use strict"

new WOW().init();


//magnific-popup
 $(document).ready(function() {
  $('.image-link').magnificPopup({
  	type:'image',
  	 closeOnContentClick: true,
   });
 });
$('.test-popup-link').magnificPopup({
  type: 'image'
  // other options
});




//плавный скролл
		$(document).ready(function(){
			$("#menuID").on("click","a", function (event) {
				event.preventDefault();

				var id  = $(this).attr('href'),

					top = $(id).offset().top;
				
				$('body,html').animate({scrollTop: top}, 1500);
			});
		});



// анимация появления параграфа
$(document).ready(function(){
	let options = {threshold: [0.5]};
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
}



// подсветка меню при скроле
$(document).ready(function(){

	$(window).scroll(() => {
  	let scrollDistance = $(window).scrollTop();
		$(".section").each((i, el) => {
			if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
				$("nav a").each((i, el) => {
				if ($(el).hasClass("active2")){
						 $(el).removeClass("active2");
					}
				});
				 $('nav li:eq('+ i +')').find('a').addClass('active2');
			}	});
 });
 });


//animation number
$(document).ready(function () {
 
    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; 
        var w_top = $(window).scrollTop(); 
        var e_top = $(countbox).offset().top; 
        var w_height = $(window).height(); 
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });
            show = false;
        }
    });
});