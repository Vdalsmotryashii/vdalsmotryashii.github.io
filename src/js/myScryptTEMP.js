"use strict"



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

