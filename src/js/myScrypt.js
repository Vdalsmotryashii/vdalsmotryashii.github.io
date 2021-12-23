"use strict"

let arrSite = [];

let arrDesign = [];

let arrAdaptability = [];

let start = confirm("Хотите расчитать стоимость Вашего сайта?");


if (start == true) {
arrSite = prompt("Какой тип сайта Вы хотие: 1-сайт-визитка; 2-Лендинг; 3-интернет-магазин");
}
 else {
alert ("Всего доброго!");
}
console.log(arrSite);


arrDesign = prompt("Какой желаете дизайн: 1-простой; 2-сложный; 3-WOW-дизайн");
console.log(arrDesign);


arrAdaptability = prompt("адаптивный: 1-нет; 2-да");
console.log(arrAdaptability);


let site = arrSite [0];
let design = arrDesign [0];
let adaptability = arrAdaptability [0];
//console.log(site, design, adaptability);


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

let price1;
if (site == 1) {
	price1 = arrPrice [0][0];
	console.log(price1);
}
if (site == 2) {
	price1 = arrPrice [0][1];
	console.log(price1);
}
if (site == 3) {
	price1 = arrPrice [0][2];
	console.log(price1);
}
let price2;
if (design == 1) {
	price2 = arrPrice [1][0];
	console.log(price2);
}
if (design == 2) {
	price2 = arrPrice [1][1];
	console.log(price2);
}
if (design == 3) {
	price2 = arrPrice [1][2];
	console.log(price2);
}
let price3;
if (adaptability == 1) {
	price3 = arrPrice [2][0];
	console.log(price3);
}
if (adaptability == 2) {
	price3 = arrPrice [2][1];
	console.log(price3);
}




let timing1;
if (site == 1) {
	timing1 = arrTiming [0][0];
	console.log(timing1);
}
if (site == 2) {
	timing1 = arrTiming [0][1];
	console.log(timing1);
}
if (site == 3) {
	timing1 = arrTiming [0][2];
	console.log(timing1);
}
let timing2;
if (design == 1) {
	timing2 = arrTiming [1][0];
	console.log(timing2);
}
if (design == 2) {
	timing2 = arrTiming [1][1];
	console.log(timing2);
}
if (design == 3) {
	timing2 = arrTiming [1][2];
	console.log(timing2);
}
let timing3;
if (adaptability == 1) {
	timing3 = arrTiming [2][0];
	console.log(timing3);
}
if (adaptability == 2) {
	timing3 = arrTiming [2][1];
	console.log(timing3);
}




let timing4 = timing1 + timing2 + timing3;
console.log("всего" + timing4 + "дня(ей)");

let payment = price1 + price2 + price3;
console.log(payment);
alert("цена за сайт составить: " + payment + " у.е." + " срок изготовления: " + timing4 + " д.")


//let someFunction;
//if (true) {
//	someFunction = function(){
//		console.log("its work");
//		return;
//	}
//}
//console.log(someFunction());