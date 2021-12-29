"use strict"


//let someFunction;
//if (true) {
//	someFunction = function(){
//		console.log("its work");
//		return;
//	}
//}
//console.log(someFunction());



//анимация цифр
//$(document).ready(function(){
//    $('.benefits__number').spincrement({
//        thousandSeparator: "",
//        duration: 1200
//    });
//});



$('#js-button').click(function(){
	let value1 = $('#siteR').val();
	let v1 = Number(value1);
	let value2 = $('#designR').val();
	let v2 = Number(value2);
	let value3 = $('#adaptabilityR').val();
	let v3 = Number(value3);
	
	$('#js-result').html(v1 + v2 + v3 + ' у.е.');
});
let val1 = 0;
let val2 = 0;
let val3 = 0;

$('#js-button').click(function(){
	val1 = $('#siteR').val();
	if ($('#select option[value=1]').prop('selected', true)){
	val1 = 1;
}
	else if ($('#select option[value=2]').prop('selected', true)){
	val1 = 2;
}
	else if ($('#select option[value=3]').prop('selected', true)){
	val1 = 3;

} 	else { 
	val1 = 0;
	console.log(val1);
};


$('#js-result2').html(val1 + val2 + val3 + ' д.');
console.log(val1 + val2 + val3 + ' д.');

let arrPrice = [
[100, 200, 300],
[50, 60, 70],
[0, 10],
];
 
 let arrTiming = [
[1, 2, 3],
[0, 1, 3],
[0, 1],
 ];

 
//animation number
 $(document).ready(function () {
 
    let show = true;
    let countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        let w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        let e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        let w_height = $(window).height(); // Высота окна браузера
        let d_height = $(document).height(); // Высота всего документа
        let e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 2000
            });
             
            show = false;
        }
    });
 
});
//animatiom number






//анимация цифр
$(document).ready(function(){
    $('.benefits__number').spincrement({
        thousandSeparator: "",
        duration: 2000
    });
});
//анимация цифр