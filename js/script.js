function showDate(){
	document.getElementById('s_date').innerHTML=Date();
}
function bulbOn(){
	document.getElementById('img').src="images/on.gif";
}
function bulbOff(){
	document.getElementById('img').src="images/off.gif";
}
function styleChange(){
	document.getElementById('change').style.color="red";
}
function changeFont(){
	document.getElementById('c_font').style.fontSize="50px";
}
function showContent(){
	document.getElementById('s_h').style.display="block";
}
function hideContent(){
	document.getElementById('s_h').style.display="none";
}
var number1 = 5;
var number2 = 4;
var result = number1 + number2;
function dataManuculate(){
	document.getElementById('result').innerHTML=result;
}
let number3, number4, res;
number3 = 5;
number4 = 4;
res = number3 + number4;
function dataManuculate(){
	document.getElementById('res').innerHTML=res;
}
let number5, number6;
number5 = 6;
number6 = 7;
number5 += number6;
function dataResult(){
	document.getElementById('re').innerHTML=number5;
}
var data ="Welcome To SSB";
function dataRepeat(){
	document.getElementById('repeat').innerHTML=data.repeat(3);
}
let number9, number10, value;
number9 = 10;
number10 = 5;
value = number9 > number10;
function dataValue(){
	document.getElementById('com').innerHTML=value;
}
function classNameIs(){
	document.getElementsByClassName('c1')[3].innerHTML="Welcome";
}
function findTagNames(){
	var info = document.getElementsByTagName('p');
	alert(info.length);
}
function findTagNamess(){
	var info = document.getElementsByTagName('h2');
	alert(info.length);
}
let number11, number12, values;
number11 = 10;
number12 = 10;
values = number11 == number12;
function dataValues(){
	document.getElementById('comp').innerHTML=values;
}
let number13, number14, valuess;
number13 = 10;
number14 = "10";
valuess = number13 === number14;
function dataValu(){
	document.getElementById('compr').innerHTML=valuess;
}
function showText(){
	document.getElementById('s_text').innerHTML="Hello SSB";
}
function getText(){
	document.getElementById('g_text').innerHTML="Hello World";
}
function myText(){
	document.getElementById('m_text').innerHTML=" Hello I am Ulfat";
}
function text(){
	document.getElementById('text').innerHTML="Hello Bangladesh";
}
function thatText(){
	document.getElementById('t_text').innerHTML="Hello sir";
}
function elementChange(){
 //Create an Array:
const cars = ["Saab", "Volvo", "BMW"];
// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");

// Display the Array:
document.getElementById("demo").innerHTML = cars; 
}