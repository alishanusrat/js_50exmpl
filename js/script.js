/*example1*/

function showDate(){
	document.getElementById('s_date').innerHTML=Date();
}

/*example2*/

function l_on(){
	document.getElementById('pic').src="images/pic_bulbon.gif";
}
function l_off(){
	document.getElementById('pic').src="images/pic_bulboff.gif";
}

/*example3*/

function showText(){
	document.getElementById('s_text').innerHTML="hello ssb";
}

/*example4*/

function show(){
	document.getElementById('sh_text').style.display="block";
}
function notshow(){
	document.getElementById('sh_text').style.display="none";
}

/*example5*/

function showfont(){
	document.getElementById('sz_text').style.fontSize="60px";
}

/*example 6*/
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

/*example 6
document.getElementById("number_add").write(5+6);*/

/*exmple 7*/
x=10;
y=22;
z=x+y;
document.getElementById("demoadd").innerHTML =
"The value of z is: " +z;

/*exmple 8*/
var m=2;
document.getElementById("num").innerHTML = "The value of m is: "+m;

/*exmple 8*/
var n=2;
var o=10;
var p=n+o;
document.getElementById("num1").innerHTML = "The value of p is: "+p;

/*exmple 9*/
let q=20;
let r=100;
let s=q+r;
document.getElementById("num2").innerHTML = "The value of s is: "+s;

/*exmple 10*/
const t=40;
const u=100;
 const v=t+u;
document.getElementById("num3").innerHTML = "The value of v is: "+v;

/*exmple 11*/
const number1=20;
const number2=100;
 const w=number1+number2;
document.getElementById("num4").innerHTML = "The value of w is: " +w;

/*exmple 12*/

 var v1= x-y;
document.getElementById("num5").innerHTML = "The value of v1 is: "+v1;

/*exmple 13*/
var v2= x*y;
document.getElementById("num6").innerHTML = "The value of v2 is: "+v2;

/*exmple 14*/
var v3= x/y;
document.getElementById("num7").innerHTML = "The value of v3 is: "+v3;
/*exmple 14*/
var v4= x%y;
document.getElementById("num8").innerHTML = "The value of v4 is: "+v4;
/*ex15*/
let car = 16 + "Volvo";
document.getElementById("string").innerHTML = car;

/*ex16*/

let result = "The temperature is " + toCelsius(77) + " Celsius";
document.getElementById("celcius").innerHTML = "the result is:" +result;

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
  

  /*ex17*/
function dbl(){
	document.getElementById("double_click").innerHTML="Done";
}

  /*ex18*/
function mouse(){
	document.getElementById("mouseover").innerHTML="Done Done";
}
/*ex19*/
let text = "ABCDEFGHIJKLMNOPQRSTUVWXY";
document.getElementById("text_l").innerHTML = text.length;

/*ex20*/
var text_c = "HELLO WORLD";
document.getElementById("char").innerHTML = text_c.charAt(2);

/*ex 21*/
let xy = func(4, 3);
document.getElementById("func_1").innerHTML = xy;

function func(a1, b1) {
  return a1 + b1;
}

/*ex22*/
const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 
document.getElementById("man").innerHTML =
person.firstName + " is " + person.age + " years old.";

/*ex23*/
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 60,
  eyeColor: "blue"
};
document.getElementById("man1").innerHTML =
person.firstName + " is " + person1.age + " years old.";

/*ex24*/
const person2 = new Object();

person2.firstName = "leo";
person2.lastName = "hassi";
person2.age = 60;
person2.eyecolor = "black";
document.getElementById("man2").innerHTML =
person2.firstName + " is " + person2.eyecolor + " eyed man.";

/*ex25*/
const person3 = {
  firstName: "Mona",
  lastName: "Deli",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
document.getElementById("man3").innerHTML = "Her name is" +" " + person3.fullName();


/*ex26*/
const person4 = {
  firstname: "Joh",
  lastname: "Byden",
  age: 100,
  eyecolor: "blue"
};
document.getElementById("man4").innerHTML = person4["firstname"] + " is " + person4["age"] + " years old.";


/*ex27*/
const person5 = {
  firstName: "Jori",
  lastName: "Doel",
  id: 556,
};

person5.name = function() {
  return (this.firstName + " " + this.lastName).toUpperCase();
};

document.getElementById("man5").innerHTML =
"His father is " + person5.name(); 

/*ex28*/
document.getElementById("quote").innerHTML = "They are the so-called \"Vikings\" from the north." ; 

/*ex29*/
document.getElementById("s_quote").innerHTML="It\'s you."

/*ex30*/
let n1 = 123e5;
let n2 = 123e-5;
document.getElementById("number1").innerHTML = n1 + "<br>" + n2;

/*ex31*/
let n3 = "10";
let n4= "20";
let n5 = n3 + n4;
document.getElementById("number2").innerHTML = n5;

/*ex32*/
var n6 = 10;
var n7 = 20;
document.getElementById("number3").innerHTML =
"The result is: " +n6 + n7;

/*ex33*/
let n8 = 123456789012345678901234567890n;
let n9 = BigInt("123456789012345678901234567890");
document.getElementById("number4").innerHTML = n8 + "<br>" + n9;

/*ex34*/
document.getElementById("date1").innerHTML = new Date();

/*ex35*/
document.getElementById("date2").innerHTML = new Date("October 13, 2014 11:13:00");

/*ex36*/
const d = new Date("2015/03/25");
document.getElementById("date3").innerHTML = d;

/*ex37*/
let bool = -0;
document.getElementById("boolean_no").innerHTML = Boolean(bool);

/*ex38*/
document.getElementById("boolean_no1").innerHTML = Boolean(10 > 9);

/*ex39*/
let numb1,numb2;
numb1=4;
numb2=5;
numb1+=numb2;
function addi(){
document.getElementById("res1").innerHTML = numb1 ;
}

/*ex40*/
let numb3,numb4;	
numb3=4;
numb4=5;
numb3-=numb4;
function sub(){
document.getElementById("res2").innerHTML = numb3 ;
}

/*ex41*/
let cars = ["Saab", "Volvo", "BMW"];
document.getElementById("car_name").innerHTML = cars;

/*ex42*/
let cars1 = ["Saab", "Volvo", "BMW"];
document.getElementById("car_name1").innerHTML = cars1[2];

/*ex43*/
const human = {firstName:"John", lastName:"Doe", age:46};
document.getElementById("hum").innerHTML = human.firstName;

/*ex44*/
const fruits = ["Banana", "Orange", "Apple", "Mango", "jackfruit"];
let fruit_no = fruits.length;
document.getElementById("fruit_num").innerHTML = fruit_no;

/*ex45*/
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("fruit_num1").innerHTML = fruits1[fruits1.length-1];

/*ex46*/
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("fruit_num2").innerHTML = fruits2;
fruits2.pop();
document.getElementById("fruit_num3").innerHTML = fruits2;

/*ex47*/
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("fruit_num4").innerHTML = fruits3;
fruits3.push("kiwi");
document.getElementById("fruit_num5").innerHTML = fruits3;

/*ex47*/
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("fruit_num6").innerHTML = fruits4;
fruits4.shift();
document.getElementById("fruit_num7").innerHTML = fruits4;

/*ex48*/
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("fruit_num8").innerHTML = fruits5;
fruits5.unshift("Lemon");
document.getElementById("fruit_num9").innerHTML = fruits5;

/*ex49*/
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("fruit_num10").innerHTML = fruits6;
delete fruits6[2];
document.getElementById("fruit_num11").innerHTML = fruits6;

/*ex50*/
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("fruit_num12").innerHTML = fruits7;
fruits7.reverse();
document.getElementById("fruit_num13").innerHTML = fruits7;

