"use strict"

//wow
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




//плавный скролл - nicht arbaiten, Scheisse
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


//text-slider

var text_slide_cur=0;
function showtext_slide(){
    $('#text_slide'+(text_slide_cur+1)).css({opacity: 0}).animate({opacity: 1.0,left: "50px"}, 1000);
    setTimeout(hidetext_slide, 3000);
}
function hidetext_slide(){
    $('#text_slide'+(text_slide_cur+1)).css({opacity: 1}).animate({opacity: 0,left: "-50px"}, 1000,function(){showtext_slide();});
    text_slide_cur=(text_slide_cur+1)%5;
}
$(document).ready(function() {
    showtext_slide();
})


 //Калькулятор
 let v1 = 0;
 let v2 = 0;
 let v3 = 0;

$(document).ready(function(){
$('#js-button').click(function(){
    
	let value1 = $('#siteR').val();
	let v1 = Number(value1);
	let value2 = $('#designR').val();
	let v2 = Number(value2);
	let value3 = $('#adaptabilityR').val();
	let v3 = Number(value3);

	$('#js-result').html(v1 + v2 + v3 + ' у.е.'); 
    console.log(v1, v2, v3)
});
});

$(document).ready(function(){
$('#js-button').click(function(){
    let t = 0;

    let value1 = $('#siteR').val();

        if (value1 == '100'){
            t = 1;
        }
        else if (value1 == '200'){
            t = 2;
        }
        else if (value1 == '300'){
            t = 3;
        };
       
        console.log(t);

//        
    let value2 = $('#designR').val();
        if (value2 == '50'){
            t += 0;
        }
        else if (value2 == '60'){
            t += 2;
        }
        else if (value2 == '70'){
            t += 3;
        };
       
        console.log(t)
 //       
    let value3 = $('#adaptabilityR').val();
    
        if (value3 == '0'){
            t += 0;
        }
        else if (value3 == '10'){
            t += 1;
        };
        console.log(t);

if (t == 0){
            alert("вы не выбрали пункт");
        };
        
    $('#js-result2').html(t + ' д.');

});
});
