// CHAPTER # 35-38

// Question 1

function date() {
    document.write(new Date() + "</br>")
 }
 
 date()
 
 // // Question 2
 
 function fullname (){
    var first = prompt("Enter Your last Name")
    var last = prompt("Enter Your First Name")
     document.write(first + " " + last + "</br>" )
 }
 
 fullname()
 
 // //Question 3
 
 var firstnum = +prompt("Enter Your First Number")
 var lastnum = +prompt("Enter Your Last Number")
 
 function sum (){
     document.write((firstnum + lastnum) + "</br>" )
 }
 
 sum()
 
 // Question 4
 
 
 function Calculator() {
 var firstnum = +prompt("Enter Your First Number")
 var opt = prompt("Enter Your Operater")
 var lastnum = +prompt("Enter Your last Number")
 
    if (opt === "+") {
       document.write(firstnum + lastnum)
    } else if (opt === "-") {
       document.write(firstnum - lastnum)
    } else if (opt === "*") {
       document.write(firstnum * lastnum)
    } else if (opt === "/") {
       document.write(firstnum / lastnum)
    } else {
       alert ("Invalid Request")
    }
 }
 Calculator()
 
 // Question 5
 
 function square(){
    var num = +prompt("Enter a Number To Find a Square")
    document.write ("The Square of "+ num + " is " + num * num)
 }
 
 square()
 
 // Question 6
 
 
 
 // Question 7
 var start = +prompt("Enter a Number where you want to start a counting")
 var end = +prompt("Enter a Number where you want to end a counting")
 
 function starting (){
     for (i = start ; i <= end ; i++){
 document.write (i + "</br>")
     }
 }
 
 starting()
 
 // Question 8
 
 
 
 // Question 9
 
 function area() {
    var widht = +prompt("Enter the widht of triangle")
    var height = +prompt("Enter the height of triangle")
    var area = (widht * height)
    document.write("The Area of Triangle is " + area + "<br>")
    var a = 32 * 43
    document.write("The Area of Triangle is " + a)
 }
 
 area()